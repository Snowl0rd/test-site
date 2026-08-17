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

//МЕНЮ
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-menu");

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

    if (navigation.classList.contains("active")) {
        menuButton.querySelector("span").textContent = "×";
    } else {
        menuButton.querySelector("span").textContent = "☰";
    }

});

const menuLinks = document.querySelectorAll(".nav-menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");
        menuButton.querySelector("span").textContent = "☰";

    });

});