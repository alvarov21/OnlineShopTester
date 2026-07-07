// Cart System Logic

class ShoppingCart {
  constructor() {
    try {
      this.items = JSON.parse(localStorage.getItem('premium_cart')) || [];
      if (!Array.isArray(this.items)) this.items = [];
    } catch (e) {
      this.items = [];
    }
    this.init();
  }

  init() {
    this.injectCartHTML();
    this.bindEvents(); // Bind events creates the badges
    this.cacheDOM(); // Cache DOM AFTER badges are created
    this.render();
  }

  injectCartHTML() {
    if (document.getElementById('cart-drawer')) return;
    
    const cartHTML = `
      <div class="cart-overlay" id="cart-overlay"></div>
      <div class="cart-drawer" id="cart-drawer">
        <div class="cart-header">
          <h2>TU CARRITO</h2>
          <button class="close-cart" id="close-cart">&times;</button>
        </div>
        <div class="cart-body" id="cart-items">
          <!-- Items will be rendered here -->
        </div>
        <div class="cart-footer">
          <div class="cart-total">
            <span>TOTAL</span>
            <span id="cart-total-price">0.00 €</span>
          </div>
          <button class="btn btn-light checkout-btn" id="checkout-btn">TRAMITAR PEDIDO</button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', cartHTML);

    // Modify existing cart icons in header to wrap them and add badge
    document.querySelectorAll('.header-icons svg:last-child').forEach(svg => {
      if (!svg.parentElement.classList.contains('cart-icon-wrap')) {
        const wrap = document.createElement('div');
        wrap.className = 'cart-icon-wrap';
        wrap.style.cursor = 'pointer';
        svg.parentNode.insertBefore(wrap, svg);
        wrap.appendChild(svg);
        
        const badge = document.createElement('span');
        badge.className = 'cart-badge';
        badge.textContent = '0';
        wrap.appendChild(badge);
        
        // Remove old onclick
        svg.removeAttribute('onclick');
        wrap.addEventListener('click', () => this.toggleCart());
      }
    });
  }

  cacheDOM() {
    this.overlay = document.getElementById('cart-overlay');
    this.drawer = document.getElementById('cart-drawer');
    this.closeBtn = document.getElementById('close-cart');
    this.itemsContainer = document.getElementById('cart-items');
    this.totalPriceEl = document.getElementById('cart-total-price');
    this.checkoutBtn = document.getElementById('checkout-btn');
    this.badges = document.querySelectorAll('.cart-badge');
  }

  bindEvents() {
    this.closeBtn.addEventListener('click', () => this.toggleCart());
    this.overlay.addEventListener('click', () => this.toggleCart());
    this.checkoutBtn.addEventListener('click', () => {
      if (this.items.length > 0) {
        alert('Redirigiendo a la pasarela de pago seguro...');
      } else {
        alert('Tu carrito está vacío.');
      }
    });
  }

  save() {
    localStorage.setItem('premium_cart', JSON.stringify(this.items));
    this.render();
  }

  add(product) {
    const existingItem = this.items.find(item => item.name === product.name);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      this.items.push({ ...product, qty: 1 });
    }
    this.save();
    this.toggleCart(true); // Open cart automatically
  }

  remove(name) {
    this.items = this.items.filter(item => item.name !== name);
    this.save();
  }

  updateQty(name, amount) {
    const item = this.items.find(i => i.name === name);
    if (item) {
      item.qty += amount;
      if (item.qty <= 0) {
        this.remove(name);
      } else {
        this.save();
      }
    }
  }

  toggleCart(forceOpen = false) {
    if (forceOpen) {
      this.overlay.classList.add('active');
      this.drawer.classList.add('active');
      if (typeof lenis !== 'undefined') lenis.stop();
    } else {
      const isOpen = this.drawer.classList.contains('active');
      if (isOpen) {
        this.overlay.classList.remove('active');
        this.drawer.classList.remove('active');
        if (typeof lenis !== 'undefined') lenis.start();
      } else {
        this.overlay.classList.add('active');
        this.drawer.classList.add('active');
        if (typeof lenis !== 'undefined') lenis.stop();
      }
    }
  }

  render() {
    // Update badges
    const totalItems = this.items.reduce((sum, item) => sum + item.qty, 0);
    this.badges.forEach(badge => {
      badge.textContent = totalItems;
      badge.style.display = totalItems > 0 ? 'flex' : 'none';
    });

    // Render items
    if (this.items.length === 0) {
      this.itemsContainer.innerHTML = '<div class="cart-empty">Tu carrito está vacío</div>';
      this.totalPriceEl.textContent = '0.00 €';
      return;
    }

    let total = 0;
    this.itemsContainer.innerHTML = this.items.map(item => {
      total += item.price * item.qty;
      return `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-details">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">${(item.price * item.qty).toFixed(2)} €</div>
            <div class="cart-item-actions">
              <div class="qty-controls">
                <button class="qty-btn" onclick="window.Cart.updateQty('${item.name}', -1)">-</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" onclick="window.Cart.updateQty('${item.name}', 1)">+</button>
              </div>
              <button class="remove-item" onclick="window.Cart.remove('${item.name}')">Eliminar</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    this.totalPriceEl.textContent = \`\${total.toFixed(2)} €\`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.Cart = new ShoppingCart();
});
