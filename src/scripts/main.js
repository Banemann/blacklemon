function setupMobileNav() {
  const toggleBtn = document.querySelector("[data-nav-toggle]");
  const cartBtn = document.querySelector("[data-cart-button]");
  const mobileNav = document.querySelector("[data-mobile-nav]");

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("is-open");
  });

  if (cartBtn) {
    cartBtn.addEventListener("click", () => {
      console.log("Cart clicked");
    });
  }
}

function setupAccordion() {
  const headers = document.querySelectorAll('.accordion__header');
  if (!headers.length) return;

  headers.forEach((header) => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion__item');
      if (!item) return;

      const isOpen = item.classList.toggle('is-open');
      const panel = item.querySelector('.accordion__panel');
      const icon = header.querySelector('.accordion__icon');

      header.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (panel) {
        if (isOpen) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      }
      if (icon) {
        icon.textContent = isOpen ? '−' : '+';
      }
    });
  });
}

function setupCarousel() {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;
}

function setupAddToCart() {
  const addToCartBtn = document.querySelector('.add-to-cart');
  if (!addToCartBtn) return;

  addToCartBtn.addEventListener('click', () => {
    addToCartBtn.classList.add('is-added');
    
    setTimeout(() => {
      addToCartBtn.classList.remove('is-added');
    }, 800);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupMobileNav();
  setupAccordion();
  setupCarousel();
  setupAddToCart();
});
