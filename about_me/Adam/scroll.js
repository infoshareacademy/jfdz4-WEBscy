$(function () {
    var scrollOffset;

    if ($(window).width() < 768) {
        scrollOffset =78;
    } else {
        scrollOffset = 20;
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

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});