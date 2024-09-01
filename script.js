// Function to show the menu
function Menu(icon) {
    // Get the navigation menu element
    const navMenu = document.getElementById('navMenu');
    // Add class to slide the menu into view on mobile
    navMenu.classList.remove('opacity-0', '-z-[9999]');
    navMenu.classList.add('opacity-100', 'z-9999');
}

// Function to hide the menu
function CloseMenu(icon) {
    // Get the navigation menu element
    const navMenu = document.getElementById('navMenu');
    // Remove class to slide the menu out of view on mobile
    navMenu.classList.remove('opacity-100', 'z-9999');
    navMenu.classList.add('opacity-0', '-z-[9999]');
}
