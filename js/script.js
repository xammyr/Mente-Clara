/* =========================================================
   BOTÓN VOLVER ARRIBA
========================================================= */
const backBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backBtn.classList.toggle("visible", window.scrollY > 300);
});

backBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================================================
   MENÚ HAMBURGUESA
========================================================= */
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileNav = document.getElementById("mobileNav");

hamburgerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileNav.classList.toggle("active");
});

mobileNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => mobileNav.classList.remove("active"));
});

document.addEventListener("click", (e) => {
  if (!mobileNav.contains(e.target) && e.target !== hamburgerBtn) {
    mobileNav.classList.remove("active");
  }
});
