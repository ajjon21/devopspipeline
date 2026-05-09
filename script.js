// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image Slider
let slideIndex = 0;
const slidesContainer = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlides() {
    if (totalSlides > 0) {
        slideIndex++;
        if (slideIndex >= totalSlides) { slideIndex = 0; }
        updateSlidePosition();
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= totalSlides) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = totalSlides - 1; }
    updateSlidePosition();
}

function updateSlidePosition() {
    if (slidesContainer) {
        slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
}

window.addEventListener('load', () => {
    showSlides();
});