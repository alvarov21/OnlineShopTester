// Dynamic Product Logic

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  let currentProduct = null;
  let currentCategory = '';

  // Find product in catalog
  for (const category in catalog) {
    const found = catalog[category].find(p => p.id === productId);
    if (found) {
      currentProduct = found;
      currentCategory = category;
      break;
    }
  }

  if (!currentProduct) {
    document.getElementById('dyn-title').textContent = 'Producto no encontrado';
    document.getElementById('dyn-price').textContent = '';
    return;
  }

  // Populate basic info
  document.getElementById('dyn-title').textContent = currentProduct.name;
  document.getElementById('dyn-price').textContent = `${currentProduct.price.toFixed(2)} €`;
  document.getElementById('dyn-breadcrumb').textContent = `Inicio / ${currentCategory} / ${currentProduct.name}`;

  // Populate gallery
  // Since we only have 1 image per product in the original DB, we will duplicate it with CSS filters to simulate variations,
  // OR just show the main image if it's not a hoodie with variations.
  const galleryEl = document.getElementById('dyn-gallery');
  galleryEl.innerHTML = `
    <div class="gallery-img-wrap full" id="main-product-img">
      <img src="${currentProduct.img}" alt="${currentProduct.name}">
    </div>
  `;

  // Populate colors (simulated)
  const colorsEl = document.getElementById('dyn-colors');
  colorsEl.innerHTML = `
    <div class="color-swatch active" style="background-color: #111;" data-color="Oscuro" data-img="${currentProduct.img}"></div>
    <div class="color-swatch" style="background-color: #F5F5F5; border: 1px solid #ccc;" data-color="Claro" data-img="${currentProduct.img}"></div>
  `;
  document.getElementById('color-label').textContent = 'Color: Oscuro';

  // Bind color swatch events
  document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', (e) => {
      document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
      e.target.classList.add('active');
      
      document.getElementById('color-label').textContent = 'Color: ' + e.target.dataset.color;
      
      const mainImg = document.querySelector('#main-product-img img');
      // Apply a simple filter to simulate color change on the same image
      if (e.target.dataset.color === 'Claro') {
        gsap.to(mainImg, { filter: 'invert(1) hue-rotate(180deg) brightness(1.5)', duration: 0.3 });
      } else {
        gsap.to(mainImg, { filter: 'none', duration: 0.3 });
      }
    });
  });

  // Bind Add to Cart
  const addCartBtn = document.getElementById('dyn-add-cart');
  addCartBtn.addEventListener('click', () => {
    window.Cart.add({
      name: currentProduct.name,
      price: currentProduct.price,
      img: currentProduct.img
    });
  });
});
