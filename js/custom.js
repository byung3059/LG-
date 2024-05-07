const mainvisualslide = new Swiper('.main-visual-slide', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    // loop: true,
    autoplay: {
        delay: 2000,
    },
    speed: 1500,

    pagination: {
        el: '.main-visual-slide .page',
        clickable: true,
    },
});

const mainproductslide = new Swiper('.main-product-slide', {
    loop: true,
    // speed: 1000,

    pagination: {
        el: '.main-product-slide .page',
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});