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
            el: '.swiper-pagination',
            clickable:true
        },
    });
}