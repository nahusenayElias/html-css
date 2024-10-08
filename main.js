const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('myLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function myFunction() {
  const links = document.getElementById("myLinks");
  if (links.style.display === "block") {
      links.style.display = "none";  // Hide menu
  } else {
      links.style.display = "block"; // Show menu
  }
}

document.getElementById('menu-icon').addEventListener('click', myFunction);

