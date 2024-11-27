const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Toggle the menu visibility
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});




const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselContainer = document.querySelector('.carousel-container');
let productItems = Array.from(document.querySelectorAll('.product'));

// Clone the first and last product items
const firstItem = productItems[0];
const lastItem = productItems[productItems.length - 1];

// Create clones
const clonedFirstItem = firstItem.cloneNode(true);
const clonedLastItem = lastItem.cloneNode(true);

// Append the clones to the carousel container
carouselContainer.appendChild(clonedFirstItem);
carouselContainer.insertBefore(clonedLastItem, firstItem);

// Update the product items list to include the clones
productItems = Array.from(carouselContainer.children);

let index = 1; // Start from the second item
const itemWidth = productItems[0].offsetWidth + 20; // 20px for gap

// Initial positioning
carouselContainer.style.transform = `translateX(${-index * itemWidth}px)`;

// Update the carousel display
function updateCarousel() {
    carouselContainer.style.transition = 'transform 0.5s ease';
    carouselContainer.style.transform = `translateX(${-index * itemWidth}px)`;
}

// Go to the next item
nextBtn.addEventListener('click', () => {
    index++;
    updateCarousel();

    // Handle seamless looping
    if (index >= productItems.length - 1) {
        setTimeout(() => {
            carouselContainer.style.transition = 'none'; // Disable transition
            index = 1; // Reset to first real item
            carouselContainer.style.transform = `translateX(${-index * itemWidth}px)`;
        }, 500); // Match the transition duration
    }
});

// Go to the previous item
prevBtn.addEventListener('click', () => {
    index--;
    updateCarousel();

    // Handle seamless looping
    if (index <= 0) {
        setTimeout(() => {
            carouselContainer.style.transition = 'none'; // Disable transition
            index = productItems.length - 2; // Reset to last real item
            carouselContainer.style.transform = `translateX(${-index * itemWidth}px)`;
        }, 500); // Match the transition duration
    }
});




