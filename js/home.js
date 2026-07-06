document.addEventListener('DOMContentLoaded', () => {
  // 1. Render Bestsellers
  const bestsellersContainer = document.getElementById('bestsellers-container');
  if (bestsellersContainer && typeof catalog !== 'undefined') {
    // Select a few bestsellers to show (1 from each category for variety)
    const bestsellers = [
      catalog.camisetas[0],
      catalog.sudaderas[0],
      catalog.pantalones[0],
      catalog.gorras[0]
    ];
    
    bestsellers.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-img-wrap">
          <img src="${product.img}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
          <h4 class="product-title">${product.name}</h4>
          <span class="product-price">${product.price.toFixed(2)} €</span>
        </div>
        <button class="add-to-cart">Añadir al carrito</button>
      `;
      bestsellersContainer.appendChild(card);
    });
  }

  // Check for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !prefersReducedMotion) {
    
    // 2. Hero Animations
    // Split text for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      const text = heroTitle.innerHTML;
      heroTitle.innerHTML = text.split('<br>').map(line => {
        return `<span style="overflow: hidden; display: block;">${line.split('').map(char => {
          return char === ' ' ? '&nbsp;' : `<span style="display: inline-block; transform: translateY(100%); opacity: 0;" class="char">${char}</span>`;
        }).join('')}</span>`;
      }).join('');

      const tl = gsap.timeline();
      tl.to('.hero-title .char', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.03,
        ease: 'power4.out',
        delay: 0.2
      })
      .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      }, "-=0.5")
      .to('#hero-btn', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, "-=0.7");
    }

    // Hero Parallax
    gsap.to('.hero-img', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // 3. Expand Images with Parallax Inside
    const expandSections = document.querySelectorAll('.expand-section');
    expandSections.forEach((section) => {
      const wrap = section.querySelector('.expand-img-wrap');
      const img = section.querySelector('.expand-img');
      const titleReveal = section.querySelector('.expand-title-reveal');

      // Expand wrap
      if (wrap) {
        gsap.to(wrap, {
          width: '100vw',
          borderRadius: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1
          }
        });
      }

      // Inner Image Parallax
      if (img) {
        gsap.to(img, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      // Title Reveal
      if (titleReveal) {
        gsap.from(titleReveal, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        });
      }
    });

    // 4. Pinned Section (Horizontal Scroll)
    const pinnedSection = document.querySelector('.pinned-section');
    const pinnedContent = document.querySelector('.pinned-content');
    
    if (pinnedSection && pinnedContent) {
      const getScrollAmount = () => -(pinnedContent.scrollWidth - window.innerWidth);
      
      gsap.to(pinnedContent, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: pinnedSection,
          start: 'top top',
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    }

    // 5. Benefits Stagger Reveal
    gsap.to('.benefit-item', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.benefits',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

  } else if (prefersReducedMotion) {
    // Show elements immediately if reduced motion is preferred
    document.querySelectorAll('.char, .hero-subtitle, #hero-btn, .benefit-item, .expand-title-reveal').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }
});
