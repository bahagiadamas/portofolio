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

const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// AUTOPLAY
let runAutoplay = setTimeout(() => {
    next.click();   
}, 7000);


next.addEventListener('click', () => {
    initSlider('next');
});

prev.addEventListener('click', () => {
    initSlider('prev');
});



const initSlider = (type) => {
    const sliderItems = list.querySelectorAll('.item');

    if(type === 'next') {
        list.appendChild(sliderItems[0]);
        slider.classList.add('next');
    } else {
        const lastItemPosition = sliderItems.length - 1;
        list.prepend(sliderItems[lastItemPosition]);
        slider.classList.add('prev');

    }

    setTimeout(() =>  {
        slider.classList.remove('next');
        slider.classList.remove('prev');
    }, 2000);


    clearTimeout(runAutoplay);
    runAutoplay = setTimeout(() => {
        next.click();   
    }, 7000);
}