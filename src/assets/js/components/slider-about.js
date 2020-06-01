'use strict';

$(function() {  
    
    $('#slider-about').slick(
        {
            arrows: false,
            dots: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    );

    $('#slider-about__arrow-next').on("click", function() {
        console.log('work');
        $('#slider-about').slick('slickNext');
    });

    $('#slider-about__arrow-prev').on("click", function() {
        $('#slider-about').slick('slickPrev');
    });
});