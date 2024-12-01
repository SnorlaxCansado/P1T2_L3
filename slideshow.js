let currentSlideIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlideIndex);
});

function changeSlide(direction) {
    currentSlideIndex += direction;
    const slides = document.querySelectorAll(".slide");

    // Wrap around the slides
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    showSlide(currentSlideIndex);
}

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}