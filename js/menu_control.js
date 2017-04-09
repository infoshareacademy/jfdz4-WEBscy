$(function () {
    var scrollOffset = 112;

    $("#zajawka_link").click(function () {
        $('html, body').animate({
            scrollTop: $("#zajawka").offset().top - scrollOffset
        }, 1500);
    });

    $("#funkcjonalnosci_link").click(function () {
        $('html, body').animate({
            scrollTop: $("#funkcjonalnosci").offset().top - scrollOffset
        }, 1500);
    });

    $("#zapiszsie_link").click(function () {
        $('html, body').animate({
            scrollTop: $("#zapiszsie").offset().top - scrollOffset
        }, 1500);
    });

    $("#tworcy_link").click(function () {
        $('html, body').animate({
            scrollTop: $("#tworcy").offset().top - scrollOffset
        }, 1500);
    });
});

// $(document).off('scroll').on('scroll', function(){
//     if(  $('#funkcjonalnosci').offset().top < $(document).scrollTop() && $(document).scrollTop() < $('#formularz').offset().top ){
//         console.log( 'jestem w funkcjonalnosciach' );
//     }else{
//         console.error( ' NIE jestem w funkcjonalnosciach' );
//     }
// });

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});