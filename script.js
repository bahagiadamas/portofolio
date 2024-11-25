const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  header.style.opacity = scrollPercentage >= 10 ? 1 : 0;
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// Mendapatkan elemen ikon menu dan nav
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

// Menambahkan event listener untuk ikon menu
menuIcon.addEventListener("click", () => {
  // Toggle kelas antara "hidden" dan "visible"
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("visible");
});
