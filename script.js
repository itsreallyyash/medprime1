document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('scroll-container');
    let isScrolling;

    // Clone the first set of items to create an infinite scroll effect
    const clone = () => {
        const items = Array.from(scrollContainer.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            scrollContainer.appendChild(clone);
        });
    };

    // Check if the user has scrolled to the end
    const checkScroll = () => {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 50) {
            scrollContainer.scrollLeft = 1; // Reset scroll position
        }
    };

    scrollContainer.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            checkScroll();
        }, 100);
    });

    clone(); // Initialize cloning
});
