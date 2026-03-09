// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});

// ========== MOBILE MENU ==========
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileCloseBtn = document.getElementById('mobile-close-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
    });
}

if (mobileCloseBtn && mobileMenu) {
    mobileCloseBtn.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
}

// Close mobile menu when a link is clicked
if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });
    });
}

// ========== SCROLL REVEAL ==========
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const delay = entry.target.style.animationDelay || '0s';
            const delayMs = parseFloat(delay) * 1000;
            setTimeout(() => {
                entry.target.classList.add('revealed');
            }, delayMs);
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

scrollRevealElements.forEach((el) => {
    revealObserver.observe(el);
});

// ========== BACK TO TOP ==========
const backToTop = document.getElementById('back-to-top');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            backToTop.classList.remove('opacity-0', 'translate-y-4');
            backToTop.classList.add('opacity-100', 'translate-y-0');
        } else {
            backToTop.classList.add('opacity-0', 'translate-y-4');
            backToTop.classList.remove('opacity-100', 'translate-y-0');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========== COUNTDOWN TIMER ==========
function startCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    // Set end date to 7 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    function updateCountdown() {
        const now = new Date();
        const diff = endDate - now;

        if (diff <= 0) return;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

startCountdown();

// ========== SHOP PAGE FILTER ==========
const filterBtns = document.querySelectorAll('.filter-btn');
const productItems = document.querySelectorAll('.shop-product');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            productItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = '';
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 400);
                }
            });
        });
    });
}

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Show success message
        const successMsg = document.getElementById('form-success');
        if (successMsg) {
            successMsg.classList.remove('hidden');
            successMsg.classList.add('animate-fadeInUp');
            
            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 5000);
        }
        
        contactForm.reset();
    });
}

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========== WISHLIST TOGGLE ==========
document.querySelectorAll('.fa-heart').forEach(heart => {
    heart.closest('button')?.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-regular')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid', 'text-red-500');
            // Small bounce animation
            this.style.transform = 'scale(1.2)';
            setTimeout(() => this.style.transform = 'scale(1)', 200);
        } else {
            icon.classList.add('fa-regular');
            icon.classList.remove('fa-solid', 'text-red-500');
        }
    });
});
