function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("#navLinks a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("navLinks").classList.remove("show");
    });
  });
});

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}
