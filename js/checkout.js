document.addEventListener('DOMContentLoaded', () => {
  // Initialize smooth scrolling
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // Load cart data
  const cartItems = JSON.parse(localStorage.getItem('premium_cart')) || [];
  const itemsContainer = document.getElementById('checkout-items');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const totalEl = document.getElementById('checkout-total');
  
  if (cartItems.length === 0) {
    itemsContainer.innerHTML = '<p style="color:#999">No hay artículos en tu pedido.</p>';
    return;
  }
  
  let total = 0;
  itemsContainer.innerHTML = cartItems.map(item => {
    total += item.price * item.qty;
    return `
      <div class="summary-item">
        <img src="${item.img}" alt="${item.name}">
        <div class="summary-item-info">
          <div class="summary-title">${item.name}</div>
          <div class="summary-qty">Cant: ${item.qty}</div>
        </div>
        <div class="summary-price">${(item.price * item.qty).toFixed(2)} €</div>
      </div>
    `;
  }).join('');
  
  subtotalEl.textContent = `${total.toFixed(2)} €`;
  totalEl.textContent = `${total.toFixed(2)} €`;
  
  // Handle form submission
  const checkoutForm = document.getElementById('checkout-form');
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
    
    // Aquí es donde el cliente integrará Stripe o PayPal
    alert("Procesando datos de envío...\n\n(AQUÍ SE VINCULARÁ LA API DE LA PASARELA DE PAGO: STRIPE / PAYPAL)");
    
    // Simulate successful payment (optional cleanup)
    // localStorage.removeItem('premium_cart');
    // window.location.href = 'index.html';
  });
});
