// ========== CONFIG ==========
const API_URL = 'https://dummyjson.com/products';

// ========== GET PRODUCT FROM URL ==========
function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || '1'; // Default to ID 1 if none provided
}

// ========== FETCH & RENDER PRODUCT ==========
async function loadProductData() {
    const id = getProductId();
    const mainSection = document.querySelector('section.py-16');
    
    // Add loading indicator if needed, but for now we direct render

    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error('Product not found');
        const product = await response.json();
        
        renderProduct(product);
        setupGallery(product.images);
        setupReviews(product.reviews || [], product.rating);
        setupAddToCart(product);
        setupQtyControls();
        setupSizeSelection();
        
    } catch (error) {
        console.error('Error loading product:', error);
        const container = document.querySelector('.max-w-7xl');
        if (container) {
            container.innerHTML = `
                <div class="min-h-[50vh] flex flex-col items-center justify-center text-center p-10">
                    <i class="fa-solid fa-face-frown text-6xl text-dark/20 mb-6"></i>
                    <h1 class="font-display text-4xl font-bold mb-4">Product Not Found</h1>
                    <p class="text-dark/40 mb-8 max-w-md">We couldn't find the product you're looking for. It might have been removed or the link is incorrect.</p>
                    <a href="shop.html" class="bg-plant-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-plant-700 transition-all">Back to Shop</a>
                </div>
            `;
        }
    }
}

function renderProduct(p) {
    const discountPrice = (p.price * (1 - p.discountPercentage / 100)).toFixed(2);
    
    // Breadcrumbs
    const bcName = document.getElementById('breadcrumb-name');
    if (bcName) bcName.textContent = p.title;
    
    // Gallery
    const mainImg = document.getElementById('product-image'); // ID matched to HTML
    if (mainImg) {
        mainImg.src = p.images[0];
        mainImg.alt = p.title;
    }
    
    // Title & Info
    const title = document.getElementById('product-name'); // ID matched to HTML
    if (title) title.textContent = p.title;
    
    const brand = document.getElementById('product-botanical');
    if (brand) brand.textContent = p.brand || 'Premium Collection';
    
    const cat = document.getElementById('product-category');
    if (cat) cat.textContent = p.category.charAt(0).toUpperCase() + p.category.slice(1);
    
    const ratingEl = document.getElementById('product-rating');
    if (ratingEl) ratingEl.textContent = p.rating;
    
    const revCount = document.getElementById('product-review-count');
    if (revCount) revCount.textContent = `${p.reviews?.length || 0} Reviews`;
    
    // Stars
    const stars = document.getElementById('product-stars');
    if (stars) {
        const fullStars = Math.round(p.rating);
        stars.innerHTML = '<i class="fa-solid fa-star"></i>'.repeat(fullStars) + 
                         '<i class="fa-regular fa-star"></i>'.repeat(5 - fullStars);
    }

    // Prices
    const priceEl = document.getElementById('product-price');
    if (priceEl) priceEl.textContent = `$${discountPrice}`;
    
    const oldPriceEl = document.getElementById('product-old-price');
    if (oldPriceEl) {
        oldPriceEl.textContent = `$${p.price.toFixed(2)}`;
        oldPriceEl.classList.remove('hidden');
    }
    
    const discEl = document.getElementById('product-discount');
    if (discEl) {
        discEl.textContent = `-${Math.round(p.discountPercentage)}% OFF`;
        discEl.classList.remove('hidden');
    }
    
    // Description
    const desc = document.getElementById('product-description');
    if (desc) desc.textContent = p.description;
    
    // Specifications
    const light = document.getElementById('care-light');
    if (light) light.textContent = p.warrantyInformation || 'N/A';
    
    const water = document.getElementById('care-water');
    if (water) water.textContent = p.shippingInformation || '3-5 Days';
    
    const temp = document.getElementById('care-temp');
    if (temp) temp.textContent = p.availabilityStatus || 'In Stock';

    // Update Page Title
    document.title = `${p.title} — Plantopia`;
}

function setupGallery(images) {
    const thumbs = [
        document.getElementById('thumb-1'),
        document.getElementById('thumb-2'),
        document.getElementById('thumb-3')
    ];

    thumbs.forEach((img, i) => {
        if (img && images[i]) {
            img.src = images[i];
            const parent = img.parentElement;
            parent.onclick = () => {
                const mainImg = document.getElementById('product-image');
                if (mainImg) mainImg.src = images[i];
                
                // Update styling
                thumbs.forEach(t => {
                    t.parentElement.classList.remove('border-plant-500', 'opacity-100');
                    t.parentElement.classList.add('border-transparent', 'opacity-60');
                });
                parent.classList.add('border-plant-500', 'opacity-100');
                parent.classList.remove('border-transparent', 'opacity-60');
            };
        } else if (img) {
            img.parentElement.style.display = 'none';
        }
    });
}

function setupReviews(reviews, avgRating) {
    const reviewList = document.getElementById('reviews-list'); // ID matched to HTML
    if (!reviewList) return;

    // Summary Stats
    const avgRatingEl = document.getElementById('avg-rating');
    if (avgRatingEl) avgRatingEl.textContent = avgRating;
    
    const totalRevEl = document.getElementById('total-reviews');
    if (totalRevEl) totalRevEl.textContent = `Based on ${reviews.length} reviews`;

    if (!reviews || reviews.length === 0) {
        reviewList.innerHTML = '<p class="text-dark/40 py-10 text-center">No reviews yet. Be the first to share your thoughts!</p>';
        return;
    }

    reviewList.innerHTML = reviews.map(r => `
        <div class="bg-white p-8 rounded-3xl border border-dark/5 shadow-sm">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-plant-50 text-plant-600 rounded-full flex items-center justify-center font-bold">
                    ${r.reviewerName.charAt(0)}
                </div>
                <div>
                    <h5 class="font-bold text-dark">${r.reviewerName}</h5>
                    <p class="text-xs text-dark/30">${new Date(r.date).toLocaleDateString()}</p>
                </div>
                <div class="ml-auto flex text-yellow-400 text-xs">
                    ${'<i class="fa-solid fa-star"></i>'.repeat(Math.round(r.rating))}${'<i class="fa-regular fa-star"></i>'.repeat(5-Math.round(r.rating))}
                </div>
            </div>
            <p class="text-dark/60 leading-relaxed">${r.comment}</p>
        </div>
    `).join('');
}

function setupQtyControls() {
    const minus = document.getElementById('qty-minus');
    const plus = document.getElementById('qty-plus');
    const input = document.getElementById('qty-input');

    minus?.addEventListener('click', () => {
        let val = parseInt(input.value);
        if (val > 1) input.value = val - 1;
    });

    plus?.addEventListener('click', () => {
        let val = parseInt(input.value);
        if (val < 99) input.value = val + 1;
    });
}

function setupSizeSelection() {
    const btns = document.querySelectorAll('.size-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => {
                b.classList.remove('active', 'border-plant-600', 'bg-plant-50', 'text-plant-700', 'font-bold');
                b.classList.add('border-dark/10', 'font-medium');
            });
            btn.classList.add('active', 'border-plant-600', 'bg-plant-50', 'text-plant-700', 'font-bold');
            btn.classList.remove('border-dark/10', 'font-medium');
        });
    });
}

function setupAddToCart(p) {
    const btn = document.getElementById('add-to-cart-btn');
    const successMsg = document.getElementById('cart-success');
    
    btn?.addEventListener('click', () => {
        const qtyEl = document.getElementById('qty-input');
        const qty = qtyEl ? parseInt(qtyEl.value) : 1;
        
        const sizeBtn = document.querySelector('.size-btn.active');
        const size = sizeBtn ? sizeBtn.textContent.trim() : 'Medium';
        
        const discountPrice = (p.price * (1 - p.discountPercentage / 100)).toFixed(2);

        CartManager.addItem({
            id: p.id,
            name: p.title,
            price: parseFloat(discountPrice),
            img: p.images[0],
            botanical: p.brand || 'Premium',
            size: size,
            qty: qty
        });

        // Visual feedback
        if (successMsg) {
            successMsg.classList.remove('hidden');
            setTimeout(() => successMsg.classList.add('hidden'), 3000);
        }

        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check mr-2"></i> Added!';
        btn.classList.add('bg-green-600');
        
        setTimeout(() => {
            btn.innerHTML = originalHtml;
            btn.classList.remove('bg-green-600');
        }, 2000);
    });
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', loadProductData);
