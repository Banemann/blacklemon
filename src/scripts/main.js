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

document.addEventListener("DOMContentLoaded", setupMobileNav);
