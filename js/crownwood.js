

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="making-arrow-prev"></button>',
    nextArrow: '<button class="making-arrow-next"></button>',
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    // adaptiveHeight: true,
    focusOnSelect: true
});
$('.samples-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    dots: true,
    centerMode: false,
    // adaptiveHeight: true
});


