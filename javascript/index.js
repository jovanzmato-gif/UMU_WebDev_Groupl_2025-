// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTop");

  // SCROLL-TO-TOP BUTTON
  const toggleScrollButton = () => {
    if (!scrollTopBtn) return;
    scrollTopBtn.style.display = window.scrollY > 250 ? "flex" : "none";
  };

  window.addEventListener("scroll", toggleScrollButton);

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Hover animations helper
  const addHoverEffect = (elements, hoverClass) => {
    elements.forEach(el => {
      el.addEventListener("mouseenter", () => el.classList.add(hoverClass));
      el.addEventListener("mouseleave", () => el.classList.remove(hoverClass));
    });
  };

  // Apply hover effects
  addHoverEffect(document.querySelectorAll(".art-grid img.artwork"), "art-hover");
  addHoverEffect(document.querySelectorAll(".artist-card"), "artist-hover");

  // Animate elements on scroll using IntersectionObserver
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("fade-in");
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll(".art-grid img, .artist-card");
  fadeElements.forEach(el => observer.observe(el));
});
