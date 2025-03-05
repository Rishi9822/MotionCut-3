// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    
    // Change icon based on menu state
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Product Image Gallery
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevImageBtn = document.getElementById('prevImage');
const nextImageBtn = document.getElementById('nextImage');

// Array to store image sources
const images = Array.from(thumbnails).map(thumbnail => 
    thumbnail.querySelector('img').src
);

let currentImageIndex = 0;

// Function to update the main image
function updateMainImage(index) {
    mainImage.src = images[index];
    
    // Update active thumbnail
    thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('active');
    });
    thumbnails[index].classList.add('active');
    
    currentImageIndex = index;
}

// Add click event to thumbnails
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const index = parseInt(thumbnail.dataset.index);
        updateMainImage(index);
    });
});

// Previous and Next buttons
prevImageBtn.addEventListener('click', () => {
    currentImageIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    updateMainImage(currentImageIndex);
});

nextImageBtn.addEventListener('click', () => {
    currentImageIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    updateMainImage(currentImageIndex);
});

// Quantity Selector
const quantityInput = document.getElementById('quantity');
const decreaseBtn = document.getElementById('decreaseQuantity');
const increaseBtn = document.getElementById('increaseQuantity');

decreaseBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

increaseBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
});

// Add to Cart Animation
const addToCartBtn = document.getElementById('addToCartBtn');

addToCartBtn.addEventListener('click', () => {
    // Simple animation effect
    addToCartBtn.classList.add('adding');
    
    // Change text temporarily
    const originalText = addToCartBtn.innerHTML;
    addToCartBtn.innerHTML = '<i class="fas fa-check"></i> Added to Cart';
    
    // Reset after animation
    setTimeout(() => {
        addToCartBtn.classList.remove('adding');
        addToCartBtn.innerHTML = originalText;
    }, 2000);
    
    // You would typically send data to a cart system here
    console.log('Product added to cart!');
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Add some additional styles for the "Added to Cart" animation
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .adding {
            background-color: #10b981 !important;
            transform: scale(1.05);
        }
    </style>
`);