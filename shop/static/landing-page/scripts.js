const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Toggle the menu visibility
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});




const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselContainer = document.querySelector('.carousel-container');
    const productItems = document.querySelectorAll('.product');
    
    // Clone the first and last product items
    const firstItem = productItems[0];
    const lastItem = productItems[productItems.length - 1];
    
    // Create clones
    const clonedFirstItem = firstItem.cloneNode(true);
    const clonedLastItem = lastItem.cloneNode(true);

    // Append the clones to the carousel container
    carouselContainer.appendChild(clonedFirstItem);
    carouselContainer.insertBefore(clonedLastItem, productItems[0]);

    let index = 1;  // Start from the second item since the first item is now cloned at the start
    const totalItems = productItems.length;

    // Update the carousel display
    function updateCarousel() {
        const offset = -index * (productItems[0].offsetWidth + 20); // 20px for the gap between products
        carouselContainer.style.transform = `translateX(${offset}px)`;
    }

    // Go to the next item
    nextBtn.addEventListener('click', () => {
        index++;
        
        // If we reach the last item, move the carousel to the beginning
        if (index >= totalItems) {
            setTimeout(() => {
                carouselContainer.style.transition = 'none'; // Disable transition for seamless jump
                carouselContainer.style.transform = `translateX(0)`;
                index = 1;  // Reset to first actual item (skip the cloned first item)
            }, 500);  // Wait for the transition to finish before resetting
        } else {
            carouselContainer.style.transition = 'transform 0.5s ease';  // Re-enable transition
        }

        updateCarousel();
    });

    // Go to the previous item
    prevBtn.addEventListener('click', () => {
        index--;
        
        // If we reach the first item, move the carousel to the last
        if (index < 0) {
            setTimeout(() => {
                carouselContainer.style.transition = 'none'; // Disable transition for seamless jump
                carouselContainer.style.transform = `translateX(${-(totalItems - 1) * (productItems[0].offsetWidth + 20)}px)`;
                index = totalItems - 2;  // Set index to the last real item (skip the cloned last item)
            }, 500);  // Wait for the transition to finish before resetting
        } else {
            carouselContainer.style.transition = 'transform 0.5s ease';  // Re-enable transition
        }

        updateCarousel();
    });



