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
        slidesPerView: 1.1,
        spaceBetween: 20,
        // allowTouchMove: false,
        mousewheel:false,
        pagination: {
            el: '.news__slider_pagination',
            clickable:true
        },
        breakpoints: {
            400:{
                slidesPerView: 1.2,
                spaceBetween: 30,
                
            },
            550:{
                slidesPerView: 1.8,
                spaceBetween: 30,
                
            },
            768:{
                slidesPerView: 2.2,
                spaceBetween: 30
            },
            991:{
                slidesPerView: 2.9,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3.5,
                spaceBetween: 40
            },
            1200: {
                slidesPerView: 3.5,
                spaceBetween: 50
            }
        }
    });
}

function directionsSlider () {
    const mainSlider = document.querySelector('.directions__slider');
    if (!mainSlider) return;

    const slider = new Swiper(mainSlider, {
        loop: false,
        rewind: true,
        speed: 700,
        slidesPerView: 1.05,
        spaceBetween: 20,
        // allowTouchMove: false,
        mousewheel:false,
        pagination: {
            el: '.directions__slider_pagination',
            clickable:true
        },
        breakpoints: {
            450:{
                slidesPerView: 1.3,
                spaceBetween: 30,
                
            },
            600:{
                slidesPerView: 1.5,
                spaceBetween: 30,
                
            },
            768:{
                slidesPerView: 1.8,
                spaceBetween: 30,
                
            },
            991:{
                slidesPerView: 2.2,
                spaceBetween: 30
            },
            1024:{
                slidesPerView: 2.7,
                spaceBetween: 30
            },
            1240: {
                slidesPerView: 3.1,
                spaceBetween: 40
            },
            1500: {
                slidesPerView: 3.5,
                spaceBetween: 50
            }
        }
    });
}

function teamSlider () {
    const mainSlider = document.querySelector('.team__slider');
    if (!mainSlider) return;

    const slider = new Swiper(mainSlider, {
        loop: false,
        rewind: true,
        speed: 700,
        slidesPerView: 1.1,
        spaceBetween: 20,
        // allowTouchMove: false,
        mousewheel:false,
        pagination: {
            el: '.team__slider_pagination',
            clickable:true
        },
        breakpoints: {
            400:{
                slidesPerView: 1.2,
                spaceBetween: 30,
                
            },
            550:{
                slidesPerView: 1.8,
                spaceBetween: 30,
                
            },
            768:{
                slidesPerView: 2.2,
                spaceBetween: 30
            },
            991:{
                slidesPerView: 2.9,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3.5,
                spaceBetween: 40
            },
            1200: {
                slidesPerView: 3.5,
                spaceBetween: 50
            }
        }
    });
}

function projectsSlider () {
    const mainSlider = document.querySelector('.projects__slider');
    if (!mainSlider) return;

    const slider = new Swiper(mainSlider, {
        loop: false,
        rewind: true,
        speed: 700,
        slidesPerView: 1.1,
        spaceBetween: 20,
        // allowTouchMove: false,
        mousewheel:false,
        pagination: {
            el: '.projects__slider_pagination',
            clickable:true
        },
        breakpoints: {
            400:{
                slidesPerView: 1.2,
                spaceBetween: 20,
                
            },
            550:{
                slidesPerView: 1.8,
                spaceBetween: 20,
                
            },
            768:{
                slidesPerView: 2.2,
                spaceBetween: 20
            },
            991:{
                slidesPerView: 2.8,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 3.1,
                spaceBetween: 40
            },
            1400: {
                slidesPerView: 3.5,
                spaceBetween: 50
            }
        }
    });
}