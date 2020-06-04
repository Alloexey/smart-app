'use strict';

$(function() {  
    
    $('#slider').slick(
        {
            arrows: false,
            dots: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1
        }
    );

    $('#slider__arrow-next').on("click", function() {
        $('#slider').slick('slickNext');
    });

    $('#slider__arrow-prev').on("click", function() {
        $('#slider').slick('slickPrev');
    });
});