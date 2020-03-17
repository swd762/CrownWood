
// Slider for advantages block in mobile layout
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
// ***

// Slider for samples in mobile layout
$('.samples-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    dots: true,
    centerMode: false,
    // adaptiveHeight: true
});
// ***

// Initilize fancy box for #single_image
$("a#single_image").fancybox();
// ***

// Slowly links transition
$(".slowly").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});
// ***

// script for yellow bar in top menu
let links = document.querySelectorAll('.menu-js');
let target = document.querySelector('.target');
let t_left = target.getBoundingClientRect().left;
let t_top = target.getBoundingClientRect().top;

function mouseenterFunc() {
    target.classList.add('active');
    const width = this.getBoundingClientRect().width;
    const left = this.getBoundingClientRect().left;
    target.style.width = `${width}px`;
    target.style.transform = `translateX(${left-t_left}px)`;
    target.style.top = `${t_top}px`;
}
function mouseleaveFunc() {
    target.style.removeProperty('width');
    // target.style.removeProperty('transform');
    target.style.transform = `none`;
    target.classList.remove('active');
}

for (let i = 0; i <links.length ; i++) {
    links[i].addEventListener('mouseenter', mouseenterFunc);
    links[i].addEventListener('mouseleave', mouseleaveFunc);
}
// ***

// remove events from a.dots
let no_dots = document.querySelectorAll('.dot-js');
for (let i = 0; i <no_dots.length ; i++) {
    no_dots[i].addEventListener('click', function (event) {
    event.preventDefault();
    });
}
// ***


    $(document).ready(function() {
        let defaults = {
            containerID: 'toTop', // fading element id
            containerHoverID: 'toTopHover', // fading element hover id
            scrollSpeed: 1200,
            easingType: 'linear'
        };
        $().UItoTop({ easingType: 'easeOutQuart' });
    });
