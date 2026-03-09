// ========== CART MANAGER (shared across all pages) ==========
// This file manages the shopping cart in localStorage

const CartManager = {
    STORAGE_KEY: 'plantopia-cart',

    getCart() {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    },

    saveCart(cart) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
        this.updateCartBadges();
    },

    addItem(item) {
        const cart = this.getCart();
        // Loose equality for ID check (API returns numbers, dataset returns strings)
        const existing = cart.find(c => c.id == item.id && c.size === item.size);
        if (existing) {
            existing.qty += item.qty;
        } else {
            cart.push({ ...item });
        }
        this.saveCart(cart);
        return cart;
    },

    removeItem(id, size) {
        let cart = this.getCart();
        cart = cart.filter(c => !(c.id == id && c.size === size));
        this.saveCart(cart);
        return cart;
    },

    updateQty(id, size, qty) {
        const cart = this.getCart();
        const item = cart.find(c => c.id == id && c.size === size);
        if (item) {
            item.qty = Math.max(1, Math.min(99, qty));
        }
        this.saveCart(cart);
        return cart;
    },

    clearCart() {
        this.saveCart([]);
    },

    getTotal() {
        const cart = this.getCart();
        return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    },

    getItemCount() {
        const cart = this.getCart();
        return cart.reduce((sum, item) => sum + item.qty, 0);
    },

    updateCartBadges() {
        const count = this.getItemCount();
        document.querySelectorAll('.cart-count').forEach(el => {
            el.textContent = count;
            if (count > 0) {
                el.classList.remove('hidden');
                // Pulse animation
                el.classList.add('animate-bounce');
                setTimeout(() => el.classList.remove('animate-bounce'), 1000);
            } else {
                el.classList.add('hidden');
            }
        });
    }
};

// Global Add to Cart Listener
document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-add-to-cart]');
    if (btn) {
        e.preventDefault();
        e.stopPropagation(); // Prevent navigating to product page

        const id = btn.dataset.id;
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);
        const img = btn.dataset.img;
        const botanical = btn.dataset.botanical;

        CartManager.addItem({
            id: id,
            name: name,
            price: price,
            img: img,
            botanical: botanical,
            size: 'Medium',
            qty: 1
        });

        // Visual Feedback on Button
        const originalHtml = btn.innerHTML;
        const originalClass = btn.className;
        
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        btn.classList.add('bg-plant-600', 'text-white');
        
        setTimeout(() => {
            btn.innerHTML = originalHtml;
            btn.className = originalClass;
        }, 2000);
    }
});

// Update badges on every page load
document.addEventListener('DOMContentLoaded', () => {
    CartManager.updateCartBadges();
});


// ========== CART PAGE LOGIC ==========
function initCartPage() {
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const filledCart = document.getElementById('cart-filled');
    if (!cartItems) return; // Not on cart page

    renderCart();

    // Clear cart
    document.getElementById('clear-cart-btn')?.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear your entire cart?')) {
            CartManager.clearCart();
            renderCart();
        }
    });

    // Coupon code
    document.getElementById('coupon-btn')?.addEventListener('click', () => {
        const input = document.getElementById('coupon-input');
        const msg = document.getElementById('coupon-msg');
        if (input.value.trim().toUpperCase() === 'PROMO20') {
            msg.classList.remove('hidden');
            msg.innerHTML = '<i class="fa-solid fa-check-circle mr-1"></i>20% discount applied!';
            msg.classList.remove('text-red-500');
            msg.classList.add('text-plant-600');
            renderCart(0.2);
        } else if (input.value.trim() !== '') {
            msg.classList.remove('hidden');
            msg.innerHTML = '<i class="fa-solid fa-xmark-circle mr-1"></i>Invalid coupon code';
            msg.classList.remove('text-plant-600');
            msg.classList.add('text-red-500');
        }
    });

    // Checkout
    document.getElementById('checkout-btn')?.addEventListener('click', () => {
        const cart = CartManager.getCart();
        if (cart.length === 0) return;

        const modal = document.getElementById('checkout-modal');
        const inner = document.getElementById('checkout-modal-inner');
        modal.classList.remove('hidden');
        setTimeout(() => {
            inner.style.transform = 'scale(1)';
            inner.style.opacity = '1';
        }, 50);

        CartManager.clearCart();
        renderCart();
    });
}

function renderCart(discount = 0) {
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const filledCart = document.getElementById('cart-filled');
    const cart = CartManager.getCart();

    if (cart.length === 0) {
        emptyCart.classList.remove('hidden');
        filledCart.classList.add('hidden');
        return;
    }

    emptyCart.classList.add('hidden');
    filledCart.classList.remove('hidden');

    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center" data-index="${index}">
            <!-- Product Info -->
            <div class="md:col-span-6 flex items-center gap-4">
                <a href="product.html?id=${item.id}" class="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden bg-plant-50 flex-shrink-0 block">
                    <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
                </a>
                <div class="flex-1 min-w-0">
                    <a href="product.html?id=${item.id}" class="font-semibold text-lg hover:text-plant-600 transition-colors block truncate">${item.name}</a>
                    <p class="text-dark/40 text-sm mt-0.5">${item.botanical || ''}</p>
                    <div class="flex items-center gap-2 mt-1">
                        <span class="text-xs text-dark/40 bg-dark/5 px-2 py-0.5 rounded-full">${item.size || 'Medium'}</span>
                    </div>
                    <!-- Mobile Price -->
                    <div class="md:hidden mt-2 font-bold text-plant-700">$${item.price.toFixed(2)}</div>
                </div>
            </div>

            <!-- Price (desktop) -->
            <div class="hidden md:flex md:col-span-2 justify-center">
                <span class="font-semibold text-dark/70">$${item.price.toFixed(2)}</span>
            </div>

            <!-- Quantity -->
            <div class="md:col-span-2 flex justify-center">
                <div class="flex items-center border border-dark/10 rounded-xl overflow-hidden">
                    <button class="qty-change w-10 h-10 flex items-center justify-center text-dark/40 hover:bg-plant-50 hover:text-plant-700 transition-colors" data-id="${item.id}" data-size="${item.size || 'Medium'}" data-action="minus">
                        <i class="fa-solid fa-minus text-xs"></i>
                    </button>
                    <input type="number" value="${item.qty}" min="1" max="99" class="cart-qty-input w-12 h-10 text-center font-bold text-sm border-x border-dark/10 outline-none bg-transparent" data-id="${item.id}" data-size="${item.size || 'Medium'}">
                    <button class="qty-change w-10 h-10 flex items-center justify-center text-dark/40 hover:bg-plant-50 hover:text-plant-700 transition-colors" data-id="${item.id}" data-size="${item.size || 'Medium'}" data-action="plus">
                        <i class="fa-solid fa-plus text-xs"></i>
                    </button>
                </div>
            </div>

            <!-- Total + Remove -->
            <div class="md:col-span-2 flex items-center justify-between md:justify-end gap-4">
                <span class="font-bold text-lg text-plant-700">$${(item.price * item.qty).toFixed(2)}</span>
                <button class="remove-item w-9 h-9 rounded-full flex items-center justify-center text-dark/30 hover:bg-red-50 hover:text-red-500 transition-all" data-id="${item.id}" data-size="${item.size || 'Medium'}" title="Remove item">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    `).join('');

    // Calculate totals
    const subtotal = CartManager.getTotal();
    const discountAmount = subtotal * discount;
    const afterDiscount = subtotal - discountAmount;
    const shipping = afterDiscount >= 50 ? 0 : 9.99;
    const tax = afterDiscount * 0.08;
    const total = afterDiscount + shipping + tax;

    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-shipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    document.getElementById('cart-shipping').className = shipping === 0 ? 'font-semibold text-plant-600' : 'font-semibold';
    document.getElementById('cart-tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;

    // Bind events
    bindCartEvents(discount);
}

function bindCartEvents(currentDiscount) {
    // Quantity buttons
    document.querySelectorAll('.qty-change').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const size = btn.dataset.size;
            const action = btn.dataset.action;
            const cart = CartManager.getCart();
            const item = cart.find(c => c.id === id && c.size === size);
            if (!item) return;

            const newQty = action === 'plus' ? item.qty + 1 : item.qty - 1;
            if (newQty < 1) return;
            CartManager.updateQty(id, size, newQty);
            renderCart(currentDiscount);
        });
    });

    // Quantity input direct edit
    document.querySelectorAll('.cart-qty-input').forEach(input => {
        input.addEventListener('change', () => {
            const id = input.dataset.id;
            const size = input.dataset.size;
            let val = parseInt(input.value) || 1;
            if (val < 1) val = 1;
            if (val > 99) val = 99;
            CartManager.updateQty(id, size, val);
            renderCart(currentDiscount);
        });
    });

    // Remove buttons
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const size = btn.dataset.size;
            // Animate out
            const row = btn.closest('.cart-item');
            row.style.opacity = '0';
            row.style.transform = 'translateX(30px)';
            row.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                CartManager.removeItem(id, size);
                renderCart(currentDiscount);
            }, 300);
        });
    });
}

document.addEventListener('DOMContentLoaded', initCartPage);
