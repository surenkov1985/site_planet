function mainSlider () {
    const mainSlider = document.querySelector('.fs__slider');
    if (!mainSlider) return;

    const slider = new Swiper(mainSlider, {
        loop: true,
        speed: 700,
        effect: 'fade',
        direction: 'vertical',
        allowTouchMove: false,
        mousewheel:false,
        // If we need pagination
        pagination: {
            el: '.fs__slider .swiper-pagination',
            clickable:true
        },
    });
}

function consultantSlider () {
    const mainSlider = document.querySelector('.consultants__slider');
    if (!mainSlider) return;

    const slider = new Swiper(mainSlider, {
        loop: false,
        rewind: true,
        speed: 700,
        slidesPerView: 2,
        
        spaceBetween: 60,
        // allowTouchMove: false,
        mousewheel:false,
        // If we need pagination
        pagination: {
            el: '.consultants__slider_pagination',
            clickable:true
        },
        breakpoints : {
            1600: {
                slidesPerView: 2.5, 
                spaceBetween: 70
            }
        }
    });
}

function partnersSlider () {
    const mainSlider = document.querySelector('.partners__slider');
    if (!mainSlider) return;

    const slider = new Swiper(mainSlider, {
        loop: false,
        rewind: true,
        speed: 700,
        slidesPerView: 1.2,
        spaceBetween: 30,
        // allowTouchMove: false,
        mousewheel:false,
        // If we need pagination
        pagination: {
            el: '.partners__slider_pagination',
            clickable:true
        },
        breakpoints: {
            420: {
                slidesPerView: 1.3,
                spaceBetween: 30,
            },
            600: {
                slidesPerView: 1.8,
                spaceBetween: 30,
            },
            700: {
                slidesPerView: 2.2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3.2,
                spaceBetween: 50,
            },
            1240: {
                slidesPerView: 4.2,
                spaceBetween: 50,
            }
        }
    });
}

function newsSlider () {
    const mainSlider = document.querySelector('.news__slider');
    if (!mainSlider) return;

    const slider = new Swiper(mainSlider, {
        loop: false,
        rewind: true,
        speed: 700,
        slidesPerView: 3.5,
        spaceBetween: 50,
        // allowTouchMove: false,
        mousewheel:false,
        // If we need pagination
        pagination: {
            el: '.news__slider_pagination',
            clickable:true
        },
    });
}