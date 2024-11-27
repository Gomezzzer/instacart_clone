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


const buyAgainPrevBtn = document.querySelector('.buy-again-prev-btn');
const buyAgainNextBtn = document.querySelector('.buy-again-next-btn');
const buyAgainContainer = document.querySelector('.buy-again-container');
let buyAgainItems = Array.from(document.querySelectorAll('.buy-again-product'));

// Clone the first and last items
const buyAgainFirstItem = buyAgainItems[0];
const buyAgainLastItem = buyAgainItems[buyAgainItems.length - 1];

// Create clones
const buyAgainClonedFirst = buyAgainFirstItem.cloneNode(true);
const buyAgainClonedLast = buyAgainLastItem.cloneNode(true);

// Append clones to the container
buyAgainContainer.appendChild(buyAgainClonedFirst);
buyAgainContainer.insertBefore(buyAgainClonedLast, buyAgainFirstItem);

// Update the items list to include clones
buyAgainItems = Array.from(buyAgainContainer.children);

let buyAgainIndex = 1; // Start from the second item
const buyAgainItemWidth = buyAgainItems[0].offsetWidth + 20; // Adjust for the gap

// Initial positioning
buyAgainContainer.style.transform = `translateX(${-buyAgainIndex * buyAgainItemWidth}px)`;

// Update carousel display
function updateBuyAgainCarousel() {
    buyAgainContainer.style.transition = 'transform 0.5s ease';
    buyAgainContainer.style.transform = `translateX(${-buyAgainIndex * buyAgainItemWidth}px)`;
}

// Go to the next item
buyAgainNextBtn.addEventListener('click', () => {
    buyAgainIndex++;
    updateBuyAgainCarousel();

    // Handle seamless looping
    if (buyAgainIndex >= buyAgainItems.length - 1) {
        setTimeout(() => {
            buyAgainContainer.style.transition = 'none';
            buyAgainIndex = 1; // Reset to the first real item
            buyAgainContainer.style.transform = `translateX(${-buyAgainIndex * buyAgainItemWidth}px)`;
        }, 500);
    }
});

// Go to the previous item
buyAgainPrevBtn.addEventListener('click', () => {
    buyAgainIndex--;
    updateBuyAgainCarousel();

    // Handle seamless looping
    if (buyAgainIndex <= 0) {
        setTimeout(() => {
            buyAgainContainer.style.transition = 'none';
            buyAgainIndex = buyAgainItems.length - 2; // Reset to the last real item
            buyAgainContainer.style.transform = `translateX(${-buyAgainIndex * buyAgainItemWidth}px)`;
        }, 500);
    }
});




