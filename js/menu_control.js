$(function(){
    $('nav li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});