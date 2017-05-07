$(function () {
    var scrollOffset;

    if ($(window).width() < 768) {
        scrollOffset = 250;
    } else {
        scrollOffset = 50;
    }

    $("#about-link").click(function () {
        $('html, body').animate({
            scrollTop: $("#omnie").offset().top - scrollOffset
        }, 1500);
    });

    $("#skill-link").click(function () {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top - scrollOffset
        }, 1500);
    });

    $("#port-link").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top - scrollOffset
        }, 1500);
    });

    $("#cont-link").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - scrollOffset
        }, 1500);
    });

    $("#findme-link").click(function () {
        $('html, body').animate({
            scrollTop: $("#znajdziesz").offset().top - scrollOffset
        }, 1500);
    });
});
