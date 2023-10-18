// Get references to all elements with the class ".mobile-menu-btn"
const menuButtons = document.querySelectorAll('.mobile-menu-btn');
const mobileMenu = document.getElementById('mobileMenu');

// Add a click event listener to each menu button
menuButtons.forEach(menuButton => {
    menuButton.addEventListener('click', () => {
        // Toggle the "hidden" class on the mobile menu
        mobileMenu.classList.toggle('hidden');
    });
});