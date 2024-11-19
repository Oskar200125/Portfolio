/*Бургер меню 2 способ*/
//$(document).ready(function() {
//    $('#navToggle').click(function() {
//        $('#nav').toggleClass('show');
//    });
//});


$(function(){
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    /*Бургер меню*/
    navToggle.on("click", function(event){
        event.preventDefault();
        nav.toggleClass("show");
    });

    /*Хедер слайдер*/
    let slider = $("#header__contentSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    /*Отзыв слайдер*/
    let slider2 = $("#reviewsSlider");

    slider2.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        dots: true,
        initialSlide: 2,
        speed: 300,
        responsive: [{
        breakpoint: 901,
        settings: {
            arrows: false
        }
        }]

    });

});
