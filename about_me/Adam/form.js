$('#button').click(function (event) {
    event.preventDefault();
    $('#moral').toggle(800).toggleClass('show');
    // $('#instruction').toggle(600).toggleClass('show');
    $('.contact').toggle(400).toggleClass('hide');
})