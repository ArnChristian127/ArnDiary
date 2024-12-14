const toggle = document.getElementById('hamburger')
const nav = document.getElementById('navbar-toggled')
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active')
});
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".prelim-box-1, .prelim-box-2, .prelim-box-3, .image-prefinals, .finals-box-1, .finals-box-2");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { 
        threshold: 0
      }
    );
    elements.forEach(el => observer.observe(el));
});
