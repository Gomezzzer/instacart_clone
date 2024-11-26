const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Toggle the menu visibility
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
