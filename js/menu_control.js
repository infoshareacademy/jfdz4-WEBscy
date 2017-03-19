$(function(){
    $('nav li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});

$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});