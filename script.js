//catching the required elements
const menu = document.querySelector('#menu-btn'),
    navbar = document.querySelector('.header .navbar'),
    bmiDisplay = document.querySelector('#bmi-display'),
    bmiBtn = document.querySelector('#bmi-btn'),
    weight = document.querySelector('#weight'),
    height = document.querySelector('#height');


//toggling hamburger menu button
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

//handling the home slider
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//handling the review slider
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
    },
});


//logic for calculating BMI
const calculateBMI = (e) => {
    e.preventDefault();

    const heightValue = height.value / 100,
        weightValue = weight.value,
        bmi = weightValue / (heightValue * heightValue);

    if (!heightValue || !weightValue) {
        bmiDisplay.innerText = "please fill all the input fields";
    } else if (bmi < 18.5) {
        bmiDisplay.innerText = "you are at UNDER WEIGHT category, needs to gain more weight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiDisplay.innerText = "you are at NORMAL WEIGHT category.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiDisplay.innerText = "you are at OVER WEIGHT category, needs to loose weight.";
    } else if (bmi >= 30) {
        bmiDisplay.innerText = "you are at OBESE category, needs to consult.";
    }
}

bmiBtn.addEventListener('click', calculateBMI);