$(function() {

    /* Reviews Slider */
    let shopSlider = $("#shopSlider");

    shopSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 500
    });


    /*Timer*/
    var totalSeconds = 600; // 10 минут

    function startTimer() {
        var interval = setInterval(function() {
            if (totalSeconds <= 0) {
                clearInterval(interval);
                totalSeconds = 600; // Сброс времени на 10 минут
                $("#timer").text(formatTime(totalSeconds));
                startTimer(); // Перезапуск таймера
            } else {
                totalSeconds--;
                $("#timer").text(formatTime(totalSeconds));
            }
        }, 1000);
    }

    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;
        return "00 : " + (minutes < 10 ? "0" + minutes : minutes) + " : " + (remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds);
    }

    startTimer(); // Запуск таймера


    /*Parallax--1*/
    $(document).mousemove(function(e) {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        // Получаем смещение мыши
        var mouseX = e.pageX - windowWidth / 2;
        var mouseY = e.pageY - windowHeight / 2;

        $('#parallax1').each(function() {
            var speed = $(this).data('speed');
            var offsetX = (mouseX * speed) / 100;
            var offsetY = (mouseY * speed) / 100;

            $(this).css({
                'transform': 'translate(' + offsetX + 'px, ' + offsetY + 'px)'
            });
        });
    });

    /*Parallax--2*/
    $(document).mousemove(function(e) {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        // Получаем смещение мыши
        var mouseX = e.pageX - windowWidth / 2;
        var mouseY = e.pageY - windowHeight / 2;

        $('#parallax2').each(function() {
            var speed = $(this).data('speed');
            var offsetX = (mouseX * speed) / 100;
            var offsetY = (mouseY * speed) / 100;

            $(this).css({
                'transform': 'translate(' + offsetX + 'px, ' + offsetY + 'px)'
            });
        });
    });



});
