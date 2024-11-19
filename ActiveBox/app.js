$(function(){

    /*Фиксированная Шапка*/
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    $(window).on("scroll load resize", function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos > introH ){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    });


    /*Плавный переход по пунктам меню*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll'); /*Выводит название элементов меню при клике*/
        let elementOffset = $(elementId).offset().top; /*Выводит размера в px от верха до нужного блока меню*/

        nav.removeClass("show");/*При клике на пункт меню бургер на маленьких экранах пропадает*/

        $("html, body").animate({ /*Плавный переход по размеру от верха к нужному блоку*/
            scrollTop: elementOffset - 60 /*Подбираем -цифру (-60) чтобы сделать более четкий переход к блоку*/
        }, 700);/*Плавный переход к нужному блоку в миллисекундах*/
    });


    /*Бургер открывает меню на маленьких экранах*/
    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    })


    /*Reviews --- https://kenwheeler.github.io/slick/   */
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });










    $('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
});















