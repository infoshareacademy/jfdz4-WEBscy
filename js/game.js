

function create(x, action) {
    for (var i = 0; i < x; i += 1) {
        action(i);
    }
}

var size = 10;

var $container = $('#game');

var $table = $('<table>');

$container.append($table);



function showBoard() {

    create(size, function (y) {
        var $tr = $('<tr>');

        $table.append($tr);

        create(size, function (x) {
            var $td = $('<td>');
            $td.addClass('point');
            $td.attr('x', x);
            $td.attr('y', y);
            $tr.append($td);
        });
    });
}


$(function() {
    $('#button').click(function() {
        $('#game').toggle(800).toggleClass('show');
        $('#instruction').toggle(600).toggleClass('show');
        $('#zapiszsie').toggle(400).toggleClass('hide');

    });

        showBoard();

        $('table').on('click', 'td', function () {
            var click = {
                x: parseInt($(this).attr('x')),
                y: parseInt($(this).attr('y'))
            };


            if (
                $(this).hasClass('event')

            ) {}

        }); })
