// ========== CONFIG ==========
const API_URL = 'https://dummyjson.com/products';

// State for session-only mock persistence (since API doesn't save permanently)
let localInventory = [];
let apiInventory = [];

// ========== INITIALIZE ==========
async function initDashboard() {
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: '2-digit' });
    
    await fetchInventory();
    updateStats();
    renderInventory();
    setupTabs();
    setupAddProductForm();
    setupSearch();
}

async function fetchInventory() {
    try {
        const response = await fetch("https://dummyjson.com/products" + '?limit=100');
        const data = await response.json();
        apiInventory = data.products;
    } catch (error) {
        console.error('Error fetching inventory:', error);
    }
}

function updateStats() {
    const total = apiInventory.length + localInventory.length;
    document.getElementById('stat-total-plants').textContent = total;
}

function setupTabs() {
    const links = document.querySelectorAll('.sidebar-link');
    const tabs = document.querySelectorAll('.tab-content');

    links.forEach(link => {
        link.addEventListener('click', () => {
            const target = link.dataset.tab;
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            tabs.forEach(tab => {
                tab.classList.toggle('hidden', tab.id !== `tab-${target}`);
            });
        });
    });
}

function setupAddProductForm() {
    const form = document.getElementById('add-plant-form');
    form?.addEventListener('submit', async (e) => {
        e.preventDefault();

        const newProduct = {
            title: document.getElementById('p-name').value,
            brand: document.getElementById('p-botanical').value,
            category: document.getElementById('p-category').value,
            price: parseFloat(document.getElementById('p-price').value),
            images: [document.getElementById('p-img').value],
            description: document.getElementById('p-desc').value,
            warrantyInformation: document.getElementById('p-light').value,
            shippingInformation: document.getElementById('p-water').value,
            availabilityStatus: document.getElementById('p-temp').value,
            rating: 5.0
        };

        try {
            // Mock API call
            const response = await fetch(`${API_URL}/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProduct)
            });
            const result = await response.json();
            
            // Add to local state for this session
            localInventory.unshift({ ...result, id: Date.now() }); 
            
            showToast('Product published successfully!', 'check');
            form.reset();
            updateStats();
            renderInventory();
            
            // Switch to inventory
            document.querySelector('[data-tab="inventory"]').click();
        } catch (error) {
            showToast('Failed to add product.', 'circle-exclamation');
        }
    });
}

function renderInventory(searchQuery = '') {
    const list = document.getElementById('inventory-list');
    const fullInventory = [...localInventory, ...apiInventory];
    
    const filtered = fullInventory.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (p.brand && p.brand.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    list.innerHTML = filtered.map(p => `
        <tr class="hover:bg-slate-50/50 transition-colors group">
            <td class="px-8 py-5">
                <div class="flex items-center gap-4">
                    <img src="${p.images[0]}" class="w-12 h-12 rounded-xl object-cover shadow-sm bg-slate-100">
                    <div>
                        <div class="font-bold text-sm text-dark">${p.title}</div>
                        <div class="text-[10px] text-dark/30 font-bold uppercase tracking-widest">ID: ${p.id}</div>
                    </div>
                </div>
            </td>
            <td class="px-8 py-5">
                <span class="px-3 py-1 bg-plant-50 text-plant-700 text-[10px] font-bold rounded-full uppercase tracking-wider">${p.category}</span>
            </td>
            <td class="px-8 py-5 text-center font-bold text-dark/70">$${p.price.toFixed(2)}</td>
            <td class="px-8 py-5 text-center">
                <span class="w-2 h-2 rounded-full bg-plant-500 inline-block mr-2 ring-4 ring-plant-500/10"></span>
                <span class="text-xs font-semibold text-dark/60">Live</span>
            </td>
            <td class="px-8 py-5 text-right">
                <div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button class="w-8 h-8 rounded-lg flex items-center justify-center text-dark/30 hover:bg-slate-200 hover:text-dark transition-all"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button onclick="deleteProduct(${p.id})" class="w-8 h-8 rounded-lg flex items-center justify-center text-red-300 hover:bg-red-50 hover:text-red-500 transition-all"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

async function deleteProduct(id) {
    if (confirm(`Are you sure you want to delete product #${id}?`)) {
        try {
            await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            
            // Remove from local tracking
            localInventory = localInventory.filter(p => p.id !== id);
            apiInventory = apiInventory.filter(p => p.id !== id);
            
            updateStats();
            renderInventory();
            showToast('Product removed from store.', 'trash');
        } catch (error) {
            showToast('Delete failed.', 'circle-exclamation');
        }
    }
}

// Make available globally for onclick
window.deleteProduct = deleteProduct;

function setupSearch() {
    document.getElementById('inventory-search')?.addEventListener('input', (e) => {
        renderInventory(e.target.value);
    });
}

// ========== AUTH & REUSABLE ==========
const loginForm = document.getElementById('login-form');
const loginScreen = document.getElementById('login-screen');
const dashboard = document.getElementById('dashboard');

if (sessionStorage.getItem('admin-session') === 'true') {
    loginScreen.classList.add('hidden');
    dashboard.classList.remove('hidden');
    initDashboard();
}

loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === 'admin' && pass === 'admin123') {
        sessionStorage.setItem('admin-session', 'true');
        loginScreen.classList.add('hidden');
        dashboard.classList.remove('hidden');
        initDashboard();
        showToast('Successfully logged in!', 'check');
    } else {
        const err = document.getElementById('login-error');
        err.classList.remove('hidden');
        setTimeout(() => err.classList.add('hidden'), 3000);
    }
});

document.getElementById('logout-btn')?.addEventListener('click', () => {
    sessionStorage.removeItem('admin-session');
    loginScreen.classList.remove('hidden');
    dashboard.classList.add('hidden');
});

function showToast(msg, icon = 'check') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    const toastIcon = toast.querySelector('i');
    toastMsg.textContent = msg;
    toastIcon.className = `fa-solid fa-${icon} text-xl ${icon === 'trash' ? 'text-red-400' : 'text-plant-400'}`;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
    }, 4000);
}

// Password Toggle
document.getElementById('toggle-password')?.addEventListener('click', function() {
    const input = document.getElementById('password');
    const icon = this.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
        input.type = 'password';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    }
});
