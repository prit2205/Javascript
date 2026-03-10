// Base API URLs
const API_BASE = "https://jsonplaceholder.typicode.com";
const USERS_URL = `${API_BASE}/users`;
const POSTS_URL = `${API_BASE}/posts`;
const COMMENTS_URL = `${API_BASE}/comments`;
const ALBUMS_URL = `${API_BASE}/albums`;
const PHOTOS_URL = `${API_BASE}/photos`;

// Cached data
let users = [];
let posts = [];
let albums = [];
let photos = [];
let avatarPhotos = [];
let feedPhotos = [];

// Local UI interactions state (not persisted)
const likedPostIds = new Set();
const followedUserIds = new Set();

// UI state
let selectedUserId = null;
let commentsOffcanvasInstance = null;
let albumPhotosModalInstance = null;
let currentTheme = "light";
let userProfileModalInstance = null;
let activeProfileUserId = null;

// Image performance helpers
const IMG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Crect width='8' height='8' fill='%23e5e7eb'/%3E%3C/svg%3E";
let lazyImgObserver = null;

// Simple demo auth (frontend-only)
let currentAuthUser = null;

function $(selector) {
  return document.querySelector(selector);
}

function getSavedTheme() {
  try {
    const saved = localStorage.getItem("theme");
    return saved === "dark" || saved === "light" ? saved : null;
  } catch {
    return null;
  }
}

function applyTheme(theme) {
  const next = theme === "dark" ? "dark" : "light";
  currentTheme = next;

  document.documentElement.setAttribute("data-bs-theme", next);

  const toggle = $("#themeToggle");
  const label = $("#themeToggleLabel");
  if (toggle) toggle.checked = next === "dark";
  if (label) label.textContent = next === "dark" ? "Dark" : "Light";

  try {
    localStorage.setItem("theme", next);
  } catch {
    // ignore
  }
}

function loadAuth() {
  try {
    const raw = localStorage.getItem("authUser");
    currentAuthUser = raw ? JSON.parse(raw) : null;
  } catch {
    currentAuthUser = null;
  }
  renderAuthUi();
}

function setAuthUser(user) {
  currentAuthUser = user;
  try {
    if (user) localStorage.setItem("authUser", JSON.stringify(user));
    else localStorage.removeItem("authUser");
  } catch {
    // ignore
  }
  renderAuthUi();
}

function renderAuthUi() {
  const btn = $("#loginBtn");
  if (!btn) return;

  if (currentAuthUser) {
    btn.className = "btn btn-sm btn-light rounded-pill";
    btn.removeAttribute("data-bs-toggle");
    btn.removeAttribute("data-bs-target");
    btn.innerHTML = `<i class="bi bi-box-arrow-right me-1"></i>Logout`;
    btn.onclick = () => setAuthUser(null);
  } else {
    btn.className = "btn btn-sm btn-outline-light rounded-pill";
    btn.setAttribute("data-bs-toggle", "modal");
    btn.setAttribute("data-bs-target", "#loginModal");
    btn.innerHTML = `<i class="bi bi-box-arrow-in-right me-1"></i>Login`;
    btn.onclick = null;
  }
}

let themeFlashTimer = null;
function triggerThemeFlash() {
  const flash = document.getElementById("themeFlash");
  if (!flash) return;

  flash.classList.remove("is-active");
  // force reflow so animation can restart
  void flash.offsetWidth;
  flash.classList.add("is-active");

  if (themeFlashTimer) clearTimeout(themeFlashTimer);
  themeFlashTimer = setTimeout(() => {
    flash.classList.remove("is-active");
  }, 2050);
}

function createElement(tag, className, innerHTML) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML !== undefined) el.innerHTML = innerHTML;
  return el;
}

function initLazyImages() {
  if (lazyImgObserver) return;
  if (!("IntersectionObserver" in window)) return;

  lazyImgObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const img = entry.target;
        const src = img.dataset.src;
        if (src) {
          img.src = src;
          img.removeAttribute("data-src");
        }
        lazyImgObserver.unobserve(img);
      });
    },
    { root: null, rootMargin: "250px", threshold: 0.01 }
  );
}

function observeLazyImg(img) {
  if (!img) return;
  initLazyImages();
  if (lazyImgObserver && img.dataset && img.dataset.src) {
    lazyImgObserver.observe(img);
    return;
  }
  // Fallback: if no observer support, load immediately
  if (img.dataset && img.dataset.src) {
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
  }
}

function getAvatarPhotoForUserId(userId) {
  if (!avatarPhotos.length) return null;
  const idx =
    Number.isFinite(Number(userId)) && Number(userId) > 0
      ? (Number(userId) - 1) % avatarPhotos.length
      : 0;
  return avatarPhotos[idx] ?? null;
}

function setGlobalLoading(isLoading) {
  const loader = $("#globalLoader");
  const statusBadge = $("#globalStatus");
  if (!loader || !statusBadge) return;

  if (isLoading) {
    loader.classList.remove("d-none");
    statusBadge.textContent = "Loading...";
    statusBadge.classList.remove("bg-success-subtle", "text-success-emphasis");
    statusBadge.classList.add("bg-warning-subtle", "text-warning-emphasis");
  } else {
    loader.classList.add("d-none");
    statusBadge.textContent = "Online";
    statusBadge.classList.remove("bg-warning-subtle", "text-warning-emphasis");
    statusBadge.classList.add("bg-success-subtle", "text-success-emphasis");
  }
}

async function safeFetch(url, options = {}) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error("Fetch error:", url, err);
    const statusBadge = $("#globalStatus");
    if (statusBadge) {
      statusBadge.textContent = "Offline / Error";
      statusBadge.classList.remove(
        "bg-success-subtle",
        "text-success-emphasis",
        "bg-warning-subtle",
        "text-warning-emphasis"
      );
      statusBadge.classList.add("bg-danger-subtle", "text-danger-emphasis");
    }
    throw err;
  }
}

// -------- Users --------

async function loadUsers() {
  const list = $("#usersList");
  const emptyState = $("#usersEmptyState");
  if (!list) return;

  list.innerHTML = "";
  emptyState?.classList.add("d-none");

  try {
    setGlobalLoading(true);
    users = await safeFetch(USERS_URL);
    await ensureAvatarPhotos();
    renderUsers(users);
  } catch (err) {
    list.innerHTML =
      '<div class="p-3 text-danger small">Failed to load users.</div>';
  } finally {
    setGlobalLoading(false);
  }
}

async function ensureAvatarPhotos() {
  if (avatarPhotos.length) return;
  try {
    // Fetch a pool of photos to use as avatars (10 users -> 30 is fine)
    avatarPhotos = await safeFetch(`${PHOTOS_URL}?_limit=30`);
  } catch (err) {
    console.warn("Failed to load avatar photos, will fall back to generated avatars.", err);
    avatarPhotos = [];
  }
}

function renderUsers(userList) {
  const list = $("#usersList");
  const emptyState = $("#usersEmptyState");
  if (!list) return;

  list.innerHTML = "";

  if (!userList.length) {
    emptyState?.classList.remove("d-none");
    return;
  }
  emptyState?.classList.add("d-none");

  userList.forEach((user, index) => {
    const item = createElement("button", "list-group-item text-start");
    item.type = "button";
    item.dataset.userId = String(user.id);

    const initials = user.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

    const avatarPhoto = getAvatarPhotoForUserId(user.id);

    const colorIndex = (user.id % 6) + 1;
    const avatarClass = [
      "",
      "bg-primary",
      "bg-success",
      "bg-warning",
      "bg-danger",
      "bg-info",
      "bg-secondary",
    ][colorIndex];

    const wrapper = document.createElement("div");
    wrapper.className = "d-flex align-items-center gap-2";

    const avatar = document.createElement("div");
    avatar.className = `avatar-circle ${avatarClass}`;
    avatar.dataset.openProfile = "1";
    avatar.title = "Open profile";

    if (avatarPhoto) {
      const img = document.createElement("img");
      img.src = avatarPhoto.thumbnailUrl;
      img.alt = `${user.name} avatar`;
      img.loading = "lazy";
      img.addEventListener("error", () => {
        const seed = Number.isFinite(Number(user.id)) ? Number(user.id) : index + 1;
        img.src = picsumThumbUrl(seed);
      });
      avatar.appendChild(img);
    } else {
      const span = document.createElement("span");
      span.textContent = initials;
      avatar.appendChild(span);
    }

    const info = document.createElement("div");
    info.className = "flex-grow-1";
    info.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <span class="fw-semibold small sidebar-username" data-open-profile="1" title="Open profile">${user.name}</span>
      </div>
      <div class="small-text text-muted">
        @${user.username} · ${user.company?.name ?? ""}
      </div>
      <div class="small-text text-muted">
        ${user.email}
      </div>
    `;

    wrapper.appendChild(avatar);
    wrapper.appendChild(info);
    item.appendChild(wrapper);

    // Open profile on DP/username click (stop selecting/filtering)
    const openables = item.querySelectorAll("[data-open-profile='1']");
    openables.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        openUserProfile(user.id);
      });
    });

    item.addEventListener("click", () => onUserClick(user.id, item));
    list.appendChild(item);
  });
}

function getDeterministicList(userId, size) {
  const ids = users.map((u) => u.id).filter((id) => id !== userId);
  const out = [];
  if (!ids.length) return out;
  let seed = (Number(userId) * 9301 + 49297) % 233280;
  while (out.length < Math.min(size, ids.length)) {
    seed = (seed * 9301 + 49297) % 233280;
    const idx = seed % ids.length;
    const pick = ids[idx];
    if (!out.includes(pick)) out.push(pick);
  }
  return out;
}

function renderMiniUsers(containerId, userIds) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  userIds.slice(0, 8).forEach((id) => {
    const u = users.find((x) => x.id === id);
    if (!u) return;
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "mini-user";

    const photo = getAvatarPhotoForUserId(id);
    if (photo) {
      chip.innerHTML = `
        <img class="mini-user-img" src="${IMG_PLACEHOLDER}" data-src="${photo.thumbnailUrl}" alt="" loading="lazy" decoding="async" />
        <span class="mini-user-name">${escapeHtml(u.username)}</span>
      `;
      const img = chip.querySelector("img");
      img?.addEventListener("error", () => {
        img.src = picsumThumbUrl(id);
      });
      observeLazyImg(img);
    } else {
      chip.innerHTML = `
        <span class="mini-user-dot">${escapeHtml(u.username[0].toUpperCase())}</span>
        <span class="mini-user-name">${escapeHtml(u.username)}</span>
      `;
    }

    chip.addEventListener("click", () => openUserProfile(id));
    container.appendChild(chip);
  });
}

async function openUserProfile(userId) {
  await ensureAvatarPhotos();
  activeProfileUserId = userId;
  const user = users.find((u) => u.id === userId);
  if (!user) return;

  const modalEl = document.getElementById("userProfileModal");
  if (!modalEl || !window.bootstrap) return;
  userProfileModalInstance =
    window.bootstrap.Modal.getOrCreateInstance(modalEl);

  // Header avatar
  const avatarHost = document.getElementById("profileAvatar");
  if (avatarHost) {
    const photo = getAvatarPhotoForUserId(userId);
    avatarHost.innerHTML = photo
      ? `<img src="${IMG_PLACEHOLDER}" data-src="${photo.thumbnailUrl}" alt="" decoding="async" />`
      : `<div class="profile-avatar-fallback">${escapeHtml(
          user.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
        )}</div>`;
    const img = avatarHost.querySelector("img");
    img?.addEventListener("error", () => (img.src = picsumThumbUrl(userId)));
    observeLazyImg(img);
  }

  document.getElementById("userProfileModalLabel").textContent = user.username;
  document.getElementById("profileUsername").textContent = `@${user.username}`;
  document.getElementById("profileSub").textContent =
    user.company?.catchPhrase ?? "";
  document.getElementById("profileName").textContent = user.name;
  document.getElementById("profileEmail").textContent = user.email;
  document.getElementById("profileAbout").textContent =
    user.company?.name ? `${user.company.name} · ${user.website}` : user.website;
  document.getElementById("profileAddress").textContent = user.address
    ? `${user.address.suite}, ${user.address.street}, ${user.address.city}`
    : "";

  // Follow button in profile
  const profileFollowBtn = document.getElementById("profileFollowBtn");
  if (profileFollowBtn) {
    const isFollowed = followedUserIds.has(userId);
    profileFollowBtn.className = `btn btn-sm rounded-pill ${
      isFollowed ? "btn-primary" : "btn-outline-primary"
    }`;
    profileFollowBtn.textContent = isFollowed ? "Following" : "Follow";
    profileFollowBtn.onclick = () => {
      // re-use logic
      if (followedUserIds.has(userId)) followedUserIds.delete(userId);
      else followedUserIds.add(userId);
      openUserProfile(userId);
      renderPosts();
    };
  }

  // Fake followers/following lists (deterministic)
  const followers = getDeterministicList(userId, 6);
  const following = getDeterministicList(userId + 7, 6);
  const followerCount = 80 + (userId % 7) * 13;
  const followingCount = 120 + (userId % 5) * 17;
  document.getElementById("profileFollowersCount").textContent = String(
    followerCount
  );
  document.getElementById("profileFollowingCount").textContent = String(
    followingCount
  );
  renderMiniUsers("profileFollowersList", followers);
  renderMiniUsers("profileFollowingList", following);

  // Load posts + photos
  const postsList = document.getElementById("profilePostsList");
  const postsEmpty = document.getElementById("profilePostsEmpty");
  const photosGrid = document.getElementById("profilePhotosGrid");
  const photosEmpty = document.getElementById("profilePhotosEmpty");
  if (postsList) postsList.innerHTML = '<div class="text-muted small py-2">Loading posts...</div>';
  if (photosGrid) photosGrid.innerHTML = '<div class="col-12 text-muted small py-2">Loading photos...</div>';
  postsEmpty?.classList.add("d-none");
  photosEmpty?.classList.add("d-none");

  try {
    const [userPosts, userAlbums] = await Promise.all([
      safeFetch(`${POSTS_URL}?userId=${userId}`),
      safeFetch(`${ALBUMS_URL}?userId=${userId}`),
    ]);

    document.getElementById("profilePostsCount").textContent = String(
      userPosts.length
    );

    // Render profile posts (compact)
    if (postsList) {
      postsList.innerHTML = "";
      if (!userPosts.length) {
        postsEmpty?.classList.remove("d-none");
      } else {
        userPosts.slice(0, 12).forEach((p) => {
          const item = document.createElement("div");
          item.className = "profile-post";
          item.innerHTML = `
            <div class="fw-semibold">${escapeHtml(p.title)}</div>
            <div class="small text-muted mt-1">${escapeHtml(p.body)}</div>
            <div class="mt-2">
              <button class="btn btn-sm btn-outline-secondary rounded-pill" type="button">
                <i class="bi bi-chat-left-text me-1"></i>Comments
              </button>
            </div>
          `;
          item.querySelector("button")?.addEventListener("click", () =>
            openComments(p)
          );
          postsList.appendChild(item);
        });
      }
    }

    // Photos for profile (from albums)
    let profilePhotos = [];
    if (userAlbums.length) {
      const lists = await Promise.all(
        userAlbums.map((a) => safeFetch(`${PHOTOS_URL}?albumId=${a.id}&_limit=10`))
      );
      profilePhotos = lists.flat().slice(0, 60);
    }

    document.getElementById("profilePhotosCount").textContent = String(
      profilePhotos.length
    );

    if (photosGrid) {
      photosGrid.innerHTML = "";
      if (!profilePhotos.length) {
        photosEmpty?.classList.remove("d-none");
      } else {
        profilePhotos.forEach((ph) => {
          const col = document.createElement("div");
          col.className = "col-6 col-md-4 col-lg-3";
          col.innerHTML = `
            <div class="photo-card">
              <div class="photo-img-wrap">
                <img src="${IMG_PLACEHOLDER}" data-src="${ph.thumbnailUrl}" alt="" loading="lazy" decoding="async" />
              </div>
              <div class="photo-card-title">${escapeHtml(ph.title)}</div>
            </div>
          `;
          const img = col.querySelector("img");
          img?.addEventListener("error", () => {
            const alreadyTried = img.dataset.fallbackTried === "1";
            if (!alreadyTried) {
              img.dataset.fallbackTried = "1";
              img.src = picsumThumbUrl(ph.id);
              return;
            }
          });
          observeLazyImg(img);
          photosGrid.appendChild(col);
        });
      }
    }
  } catch (err) {
    postsList && (postsList.innerHTML = '<div class="text-danger small">Failed to load profile data.</div>');
    photosGrid && (photosGrid.innerHTML = '<div class="col-12 text-danger small">Failed to load photos.</div>');
  }

  userProfileModalInstance.show();
}

function onUserClick(userId, element) {
  selectedUserId = userId;

  // Highlight active user
  document
    .querySelectorAll("#usersList .list-group-item")
    .forEach((btn) => btn.classList.remove("active"));
  element.classList.add("active");

  // Filter posts
  renderPosts();

  // If Photos tab is currently open, refresh photos for selected user
  if (isPhotosTabActive()) {
    loadSelectedUserPhotos();
  } else {
    // If photos tab isn't open, clear prompt so it updates when opened
    renderPhotosPrompt();
  }
}

// -------- Posts & Comments --------

async function loadPosts() {
  const postsList = $("#postsList");
  const emptyState = $("#postsEmptyState");
  const postsCount = $("#postsCount");

  if (!postsList) return;

  postsList.innerHTML = "";
  emptyState?.classList.add("d-none");
  postsCount && (postsCount.textContent = "Loading...");

  try {
    setGlobalLoading(true);
    // Limit to 40 posts for UX
    posts = await safeFetch(`${POSTS_URL}?_limit=40`);
    // Load a matching number of photos to display in feed
    try {
      feedPhotos = await safeFetch(`${PHOTOS_URL}?_limit=${posts.length}`);
    } catch {
      feedPhotos = [];
    }
    renderPosts();
  } catch (err) {
    postsList.innerHTML =
      '<div class="p-3 text-danger small">Failed to load posts.</div>';
    postsCount && (postsCount.textContent = "0 posts");
  } finally {
    setGlobalLoading(false);
  }
}

function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleFeed() {
  if (!posts.length) return;
  shuffleInPlace(posts);
  // keep media mapping feeling fresh too
  if (feedPhotos.length) shuffleInPlace(feedPhotos);
  renderPosts();
}

function getFeedPhotoForPost(post) {
  if (!feedPhotos.length) return null;
  const idx = Number.isFinite(Number(post?.id))
    ? (Number(post.id) - 1) % feedPhotos.length
    : 0;
  return feedPhotos[idx] ?? null;
}

function renderPosts() {
  const postsList = $("#postsList");
  const emptyState = $("#postsEmptyState");
  const postsCount = $("#postsCount");
  const searchInput = $("#globalSearchInput");

  if (!postsList) return;

  let filtered = posts;

  if (selectedUserId) {
    filtered = filtered.filter((p) => p.userId === selectedUserId);
  }

  if (searchInput && searchInput.value.trim()) {
    const term = searchInput.value.trim().toLowerCase();
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(term)
    );
  }

  postsList.innerHTML = "";

  if (!filtered.length) {
    emptyState?.classList.remove("d-none");
    postsCount && (postsCount.textContent = "0 posts");
    return;
  }

  emptyState?.classList.add("d-none");
  postsCount &&
    (postsCount.textContent =
      filtered.length === 1 ? "1 post" : `${filtered.length} posts`);

  filtered.forEach((post) => {
    const user = users.find((u) => u.id === post.userId);
    const media = getFeedPhotoForPost(post);
    const userDp = user ? getAvatarPhotoForUserId(user.id) : null;
    const isLiked = likedPostIds.has(post.id);
    const isFollowed = user ? followedUserIds.has(user.id) : false;

    const card = createElement("article", "post-card");
    card.innerHTML = `
      <div class="d-flex justify-content-between align-items-start mb-1">
        <div class="d-flex align-items-center gap-2 flex-grow-1">
          <div class="avatar-circle bg-primary-subtle text-primary-emphasis">
            ${
              userDp
                ? `<img src="${IMG_PLACEHOLDER}" data-src="${userDp.thumbnailUrl}" alt="" loading="lazy" decoding="async" />`
                : `<span>${(user?.name ?? "U")
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .substring(0, 2)
                    .toUpperCase()}</span>`
            }
          </div>
          <div class="flex-grow-1">
            <div class="d-flex align-items-start justify-content-between gap-2">
              <div class="post-title">${escapeHtml(post.title)}</div>
              <button
                class="btn btn-sm ${isFollowed ? "btn-primary" : "btn-outline-primary"} post-follow-btn"
                type="button"
                data-follow-user-id="${user?.id ?? ""}"
              >
                <i class="bi ${isFollowed ? "bi-check2" : "bi-person-plus"} me-1"></i>
                ${isFollowed ? "Following" : "Follow"}
              </button>
            </div>
            <div class="post-meta">
              ${user ? `${user.name} · @${user.username}` : "Unknown user"}
            </div>
          </div>
        </div>
      </div>
      <div class="post-media ${media ? "" : "d-none"}">
        <img
          class="post-media-img"
          src="${media ? IMG_PLACEHOLDER : ""}"
          data-src="${media ? media.thumbnailUrl : ""}"
          data-post-id="${post.id}"
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <p class="post-body mb-2">
        ${escapeHtml(post.body)}
      </p>
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
        <div class="post-meta">
          Post #${post.id} · User ID: ${post.userId}
        </div>
        <div class="post-actions">
          <button
            class="btn btn-sm ${isLiked ? "btn-danger" : "btn-outline-danger"} post-like-btn"
            type="button"
            data-like-post-id="${post.id}"
            aria-pressed="${isLiked ? "true" : "false"}"
          >
            <i class="bi ${isLiked ? "bi-heart-fill" : "bi-heart"} me-1"></i>
            Like
          </button>
          <button
            class="btn btn-sm btn-outline-secondary post-comment-btn"
            type="button"
            data-comment-post-id="${post.id}"
          >
            <i class="bi bi-chat-left-text me-1"></i>
            Comment
          </button>
          <button
            class="btn btn-sm btn-outline-secondary post-share-btn"
            type="button"
            data-share-post-id="${post.id}"
          >
            <i class="bi bi-send me-1"></i>
            Share
          </button>
        </div>
      </div>
    `;

    // Media fallback (via.placeholder.com can be blocked)
    const mediaImg = card.querySelector(".post-media-img");
    if (mediaImg && media) {
      observeLazyImg(mediaImg);
      mediaImg.addEventListener("error", () => {
        const alreadyTriedFallback = mediaImg.dataset.fallbackTried === "1";
        if (!alreadyTriedFallback) {
          mediaImg.dataset.fallbackTried = "1";
          mediaImg.src = picsumThumbUrl(media.id);
          return;
        }
        // If still failing, hide media area
        mediaImg.closest(".post-media")?.classList.add("d-none");
      });
    }

    // User DP in post (lazy + fallback)
    const dpImg = card.querySelector(".avatar-circle img");
    if (dpImg && user) {
      observeLazyImg(dpImg);
      dpImg.addEventListener("error", () => {
        const alreadyTriedFallback = dpImg.dataset.fallbackTried === "1";
        if (!alreadyTriedFallback) {
          dpImg.dataset.fallbackTried = "1";
          dpImg.src = picsumThumbUrl(user.id);
        }
      });
    }

    const commentBtn = card.querySelector("button[data-comment-post-id]");
    if (commentBtn) commentBtn.addEventListener("click", () => openComments(post));

    const likeBtn = card.querySelector("button[data-like-post-id]");
    if (likeBtn) likeBtn.addEventListener("click", () => toggleLike(post.id, likeBtn));

    const shareBtn = card.querySelector("button[data-share-post-id]");
    if (shareBtn) shareBtn.addEventListener("click", () => sharePost(post));

    const followBtn = card.querySelector("button[data-follow-user-id]");
    if (followBtn && user) {
      followBtn.addEventListener("click", () => toggleFollow(user.id, followBtn));
    }

    postsList.appendChild(card);
  });
}

function toggleLike(postId, btn) {
  if (likedPostIds.has(postId)) {
    likedPostIds.delete(postId);
  } else {
    likedPostIds.add(postId);
  }

  const isLiked = likedPostIds.has(postId);
  btn.classList.toggle("btn-danger", isLiked);
  btn.classList.toggle("btn-outline-danger", !isLiked);
  btn.setAttribute("aria-pressed", isLiked ? "true" : "false");

  const icon = btn.querySelector("i");
  if (icon) {
    icon.classList.toggle("bi-heart-fill", isLiked);
    icon.classList.toggle("bi-heart", !isLiked);
  }
}

function toggleFollow(userId, btn) {
  if (followedUserIds.has(userId)) {
    followedUserIds.delete(userId);
  } else {
    followedUserIds.add(userId);
  }

  const isFollowed = followedUserIds.has(userId);
  btn.classList.toggle("btn-primary", isFollowed);
  btn.classList.toggle("btn-outline-primary", !isFollowed);
  btn.innerHTML = `
    <i class="bi ${isFollowed ? "bi-check2" : "bi-person-plus"} me-1"></i>
    ${isFollowed ? "Following" : "Follow"}
  `;
}

async function sharePost(post) {
  const shareUrl = `${location.origin}${location.pathname}#post-${post.id}`;
  const text = `${post.title}`;

  try {
    if (navigator.share) {
      await navigator.share({ title: "Social Media Post", text, url: shareUrl });
      return;
    }
  } catch {
    // user cancelled share
    return;
  }

  try {
    await navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  } catch {
    prompt("Copy this link:", shareUrl);
  }
}

async function openComments(post) {
  const commentsList = $("#commentsList");
  const emptyState = $("#commentsEmptyState");
  const meta = $("#commentsMeta");
  const titleEl = $("#commentsOffcanvasLabel");

  if (!commentsList || !meta) return;

  commentsList.innerHTML =
    '<div class="text-center text-muted small py-3">Loading comments...</div>';
  emptyState?.classList.add("d-none");

  meta.innerHTML = `
    <div class="fw-semibold mb-1">Post #${post.id}</div>
    <div class="small">${escapeHtml(post.title)}</div>
  `;
  if (titleEl) {
    titleEl.textContent = `Comments for post #${post.id}`;
  }

  try {
    const data = await safeFetch(`${COMMENTS_URL}?postId=${post.id}`);
    renderComments(data);
  } catch (err) {
    commentsList.innerHTML =
      '<div class="text-danger small">Failed to load comments.</div>';
  }

  if (!commentsOffcanvasInstance) {
    const offcanvasEl = document.getElementById("commentsOffcanvas");
    if (offcanvasEl && window.bootstrap) {
      commentsOffcanvasInstance =
        window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
    }
  }
  commentsOffcanvasInstance?.show();
}

function renderComments(comments) {
  const commentsList = $("#commentsList");
  const emptyState = $("#commentsEmptyState");
  if (!commentsList) return;

  commentsList.innerHTML = "";

  if (!comments.length) {
    emptyState?.classList.remove("d-none");
    return;
  }
  emptyState?.classList.add("d-none");

  comments.forEach((comment) => {
    const card = createElement("div", "comment-card");
    card.innerHTML = `
      <div class="d-flex justify-content-between align-items-center mb-1">
        <div class="comment-author">${escapeHtml(comment.name)}</div>
        <div class="comment-email">${escapeHtml(comment.email)}</div>
      </div>
      <div class="comment-body">
        ${escapeHtml(comment.body)}
      </div>
    `;
    commentsList.appendChild(card);
  });
}

// -------- Albums & Photos --------

async function loadAlbums() {
  const list = $("#albumsList");
  const emptyState = $("#albumsEmptyState");
  const countBadge = $("#albumsCount");

  if (!list) return;

  list.innerHTML = "";
  emptyState?.classList.add("d-none");
  countBadge && (countBadge.textContent = "Loading...");

  try {
    setGlobalLoading(true);
    // Limit to 30 albums for UX
    albums = await safeFetch(`${ALBUMS_URL}?_limit=30`);
    renderAlbums(albums);
  } catch (err) {
    list.innerHTML =
      '<div class="p-3 text-danger small">Failed to load albums.</div>';
    countBadge && (countBadge.textContent = "0 albums");
  } finally {
    setGlobalLoading(false);
  }
}

function renderAlbums(albumList) {
  const list = $("#albumsList");
  const emptyState = $("#albumsEmptyState");
  const countBadge = $("#albumsCount");
  if (!list) return;

  list.innerHTML = "";

  if (!albumList.length) {
    emptyState?.classList.remove("d-none");
    countBadge && (countBadge.textContent = "0 albums");
    return;
  }

  emptyState?.classList.add("d-none");
  countBadge &&
    (countBadge.textContent =
      albumList.length === 1 ? "1 album" : `${albumList.length} albums`);

  albumList.forEach((album) => {
    const user = users.find((u) => u.id === album.userId);
    const item = createElement("button", "list-group-item text-start");
    item.type = "button";
    item.dataset.albumId = String(album.id);

    item.innerHTML = `
      <div class="d-flex flex-column">
        <div class="d-flex justify-content-between align-items-center mb-1">
          <span class="fw-semibold small">${escapeHtml(album.title)}</span>
          <span class="badge text-bg-light">#${album.id}</span>
        </div>
        <div class="small text-muted">
          ${user ? `${user.name} · @${user.username}` : `User #${album.userId}`}
        </div>
      </div>
    `;

    item.addEventListener("click", () => openAlbumPhotos(album));
    list.appendChild(item);
  });
}

async function openAlbumPhotos(album) {
  const grid = $("#albumPhotosGrid");
  const emptyState = $("#albumPhotosEmptyState");
  const titleEl = $("#albumPhotosModalLabel");

  if (!grid || !emptyState) return;

  grid.innerHTML =
    '<div class="col-12 text-center text-muted small py-3">Loading photos...</div>';
  emptyState.classList.add("d-none");

  if (titleEl) {
    titleEl.textContent = `Album #${album.id}: ${album.title}`;
  }

  try {
    const data = await safeFetch(
      `${PHOTOS_URL}?albumId=${album.id}&_limit=24`
    );
    renderAlbumPhotos(data);
  } catch (err) {
    grid.innerHTML =
      '<div class="col-12 text-danger small">Failed to load photos.</div>';
  }

  if (!albumPhotosModalInstance) {
    const modalEl = document.getElementById("albumPhotosModal");
    if (modalEl && window.bootstrap) {
      albumPhotosModalInstance =
        window.bootstrap.Modal.getOrCreateInstance(modalEl);
    }
  }
  albumPhotosModalInstance?.show();
}

function renderAlbumPhotos(albumPhotos) {
  const grid = $("#albumPhotosGrid");
  const emptyState = $("#albumPhotosEmptyState");
  if (!grid || !emptyState) return;

  grid.innerHTML = "";

  if (!albumPhotos.length) {
    emptyState.classList.remove("d-none");
    return;
  }

  emptyState.classList.add("d-none");

  albumPhotos.forEach((photo) => {
    const col = createElement("div", "col-6 col-md-4 col-lg-3");

    const card = createElement("div", "photo-card");

    const imgWrap = createElement("div", "photo-img-wrap");
    const img = document.createElement("img");
    img.src = IMG_PLACEHOLDER;
    img.dataset.src = photo.thumbnailUrl;
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", () => {
      const alreadyTriedFallback = img.dataset.fallbackTried === "1";
      if (!alreadyTriedFallback) {
        img.dataset.fallbackTried = "1";
        img.src = picsumThumbUrl(photo.id);
        return;
      }

      img.classList.add("d-none");
      imgWrap.classList.add("is-broken");
      imgWrap.innerHTML = `
        <div class="broken-img d-flex flex-column align-items-center justify-content-center">
          <i class="bi bi-image text-muted fs-2"></i>
          <div class="small text-muted mt-1">Image blocked</div>
        </div>
      `;
    });

    imgWrap.appendChild(img);
    observeLazyImg(img);

    const title = createElement(
      "div",
      "photo-card-title",
      escapeHtml(photo.title)
    );

    card.appendChild(imgWrap);
    card.appendChild(title);
    col.appendChild(card);
    grid.appendChild(col);
  });
}

function isPhotosTabActive() {
  const tabBtn = document.getElementById("photos-tab");
  return !!tabBtn && tabBtn.classList.contains("active");
}

function renderPhotosPrompt() {
  const grid = $("#photosGrid");
  const emptyState = $("#photosEmptyState");
  const subtitle = $("#photosSubtitle");
  if (!grid || !emptyState) return;

  grid.innerHTML = "";
  emptyState.classList.remove("d-none");

  if (!selectedUserId) {
    emptyState.textContent = "Select a user from the left to load their photos.";
    if (subtitle) {
      subtitle.textContent = "Select a user from the left to load their photos.";
    }
    return;
  }

  const user = users.find((u) => u.id === selectedUserId);
  if (subtitle) {
    subtitle.textContent = `Open the Photos tab to load photos for ${
      user ? user.name : `User #${selectedUserId}`
    }.`;
  }
  emptyState.textContent = `Open the Photos tab to load photos for ${
    user ? user.name : `User #${selectedUserId}`
  }.`;
}

// Photos tab: load photos for selected user (via albums)
async function loadSelectedUserPhotos() {
  const grid = $("#photosGrid");
  const emptyState = $("#photosEmptyState");
  const subtitle = $("#photosSubtitle");
  if (!grid || !emptyState) return;

  if (!selectedUserId) {
    renderPhotosPrompt();
    return;
  }

  grid.innerHTML =
    '<div class="col-12 text-center text-muted small py-3">Loading user photos...</div>';
  emptyState.classList.add("d-none");
  emptyState.textContent = "No photos found.";
  if (subtitle) {
    subtitle.textContent = "Loading photos...";
  }

  try {
    setGlobalLoading(true);
    const userAlbums = await safeFetch(`${ALBUMS_URL}?userId=${selectedUserId}`);

    if (!userAlbums.length) {
      photos = [];
      renderPhotosSample([]);
      emptyState.classList.remove("d-none");
      emptyState.textContent = "No albums found for this user.";
      if (subtitle) {
        subtitle.textContent = "No albums found for this user.";
      }
      return;
    }

    // Fetch a small number per album for better UX
    const photoLists = await Promise.all(
      userAlbums.map((a) => safeFetch(`${PHOTOS_URL}?albumId=${a.id}&_limit=12`))
    );

    photos = photoLists.flat().slice(0, 72);
    renderPhotosSample(photos);
    emptyState.classList.toggle("d-none", photos.length > 0);
    if (!photos.length) {
      emptyState.classList.remove("d-none");
      emptyState.textContent = "No photos found for this user.";
    }
    const user = users.find((u) => u.id === selectedUserId);
    if (subtitle) {
      subtitle.textContent = user
        ? `Showing photos for ${user.name}`
        : `Showing photos for User #${selectedUserId}`;
    }
  } catch (err) {
    grid.innerHTML =
      '<div class="col-12 text-danger small">Failed to load photos.</div>';
    emptyState.classList.remove("d-none");
    emptyState.textContent = "Photo loading failed. Please try Refresh.";
    if (subtitle) {
      subtitle.textContent = "Failed to load photos.";
    }
  } finally {
    setGlobalLoading(false);
  }
}

function picsumThumbUrl(id) {
  const safeId = Number.isFinite(Number(id)) ? Number(id) : 1;
  return `https://picsum.photos/seed/${safeId}/300/300`;
}

function renderPhotosSample(photoList) {
  const grid = $("#photosGrid");
  const emptyState = $("#photosEmptyState");
  if (!grid || !emptyState) return;

  grid.innerHTML = "";

  if (!photoList.length) {
    emptyState.classList.remove("d-none");
    return;
  }

  emptyState.classList.add("d-none");

  photoList.forEach((photo) => {
    const col = createElement("div", "col-6 col-md-4 col-lg-3");

    const card = createElement("div", "photo-card");

    const imgWrap = createElement("div", "photo-img-wrap");
    const img = document.createElement("img");
    img.src = IMG_PLACEHOLDER;
    img.dataset.src = photo.thumbnailUrl;
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", () => {
      // Fallback: JSONPlaceholder uses via.placeholder.com which can be blocked.
      // If that fails, try a neutral public image source using the same photo id as seed.
      const alreadyTriedFallback = img.dataset.fallbackTried === "1";
      if (!alreadyTriedFallback) {
        img.dataset.fallbackTried = "1";
        img.src = picsumThumbUrl(photo.id);
        return;
      }

      img.classList.add("d-none");
      imgWrap.classList.add("is-broken");
      imgWrap.innerHTML = `
        <div class="broken-img d-flex flex-column align-items-center justify-content-center">
          <i class="bi bi-image text-muted fs-2"></i>
          <div class="small text-muted mt-1">Image blocked</div>
        </div>
      `;
    });

    imgWrap.appendChild(img);
    observeLazyImg(img);

    const title = createElement(
      "div",
      "photo-card-title",
      escapeHtml(photo.title)
    );

    card.appendChild(imgWrap);
    card.appendChild(title);
    col.appendChild(card);
    grid.appendChild(col);
  });
}

// -------- Helpers --------

function escapeHtml(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// -------- Init & Event bindings --------

document.addEventListener("DOMContentLoaded", () => {
  initLazyImages();
  // Theme init (saved -> system -> light)
  const savedTheme = getSavedTheme();
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme ?? (prefersDark ? "dark" : "light"));

  $("#themeToggle")?.addEventListener("change", (e) => {
    const isDark = e.target.checked;
    applyTheme(isDark ? "dark" : "light");
    triggerThemeFlash();
  });

  // Auth init
  loadAuth();

  // Initial loads
  loadUsers();
  loadPosts();
  loadAlbums();
  renderPhotosPrompt();

  // Search: users
  const userSearchInput = $("#userSearchInput");
  if (userSearchInput) {
    userSearchInput.addEventListener("input", () => {
      const term = userSearchInput.value.trim().toLowerCase();
      if (!term) {
        renderUsers(users);
      } else {
        const filtered = users.filter((u) => {
          return (
            u.name.toLowerCase().includes(term) ||
            u.username.toLowerCase().includes(term) ||
            u.email.toLowerCase().includes(term)
          );
        });
        renderUsers(filtered);
      }
    });
  }

  // Search: global posts by title
  const globalSearchInput = $("#globalSearchInput");
  if (globalSearchInput) {
    globalSearchInput.addEventListener("input", () => {
      renderPosts();
    });
  }

  // Refresh buttons
  $("#refreshUsersBtn")?.addEventListener("click", loadUsers);
  $("#refreshPostsBtn")?.addEventListener("click", () => {
    // If posts are already loaded, shuffle to feel natural.
    // Otherwise load from API.
    if (posts.length) shuffleFeed();
    else loadPosts();
  });
  $("#refreshAlbumsBtn")?.addEventListener("click", loadAlbums);
  $("#refreshPhotosBtn")?.addEventListener("click", loadSelectedUserPhotos);

  // When Photos tab opens, load selected user's photos
  const photosTabBtn = document.getElementById("photos-tab");
  if (photosTabBtn) {
    photosTabBtn.addEventListener("shown.bs.tab", () => {
      loadSelectedUserPhotos();
    });
    // Fallback: if Bootstrap event doesn't fire, still load on click
    photosTabBtn.addEventListener("click", () => {
      setTimeout(() => loadSelectedUserPhotos(), 0);
    });
  }

  // Login form
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = $("#loginUsername")?.value?.trim();
      const password = $("#loginPassword")?.value?.trim();
      const error = $("#loginError");

      if (error) {
        error.classList.add("d-none");
        error.textContent = "";
      }

      if (!username || !password) {
        if (error) {
          error.textContent = "Please enter username and password.";
          error.classList.remove("d-none");
        }
        return;
      }

      try {
        // Ensure users are loaded so we can validate username
        if (!users.length) {
          users = await safeFetch(USERS_URL);
          await ensureAvatarPhotos();
          renderUsers(users);
        }

        const match = users.find(
          (u) => u.username.toLowerCase() === username.toLowerCase()
        );

        if (!match) {
          if (error) {
            error.textContent = "Username not found. Try one from the Users list.";
            error.classList.remove("d-none");
          }
          return;
        }

        setAuthUser({ id: match.id, username: match.username, name: match.name });

        const modalEl = document.getElementById("loginModal");
        if (modalEl && window.bootstrap) {
          window.bootstrap.Modal.getOrCreateInstance(modalEl).hide();
        }
      } catch {
        if (error) {
          error.textContent = "Login failed due to network error.";
          error.classList.remove("d-none");
        }
      }
    });
  }
});

