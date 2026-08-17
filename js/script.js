const slides = document.querySelectorAll(".hero-slideshow img");

let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].style.opacity = "0";

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].style.opacity = "1";
}

setInterval(nextSlide, 7000);