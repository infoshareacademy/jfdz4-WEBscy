

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

$('#button').unbind('click').bind('click', function () {
    var form = document.forms["myForm"]["email"].value;
    var monkey = form.indexOf("@");
    var dot = form.lastIndexOf(".");
    if (monkey<1 || dot<monkey+2 || dot+2>=form.length) {
        alert("Wprowadź poprawny adres e-mail");
        $('.placeholder').val('');
        return false;
    }
    if (!jQuery("#checkbox").is(":checked")) {
        alert("Musisz wyrazić zgode aby przejść dalej");
        return false;

    }

    else
    {
        $('#game').toggle(800).toggleClass('show');
        $('#instruction').toggle(600).toggleClass('show');
        $('#zapiszsie').toggle(400).toggleClass('hide');;
        setTimeout(function() {
            $('.placeholder').val('');
        }, 1);
        return false;
    }
});

        showBoard();

        $('table').on('click', 'td', function () {
            var click = {
                x: parseInt($(this).attr('x')),
                y: parseInt($(this).attr('y'))
            };


            if (
                $(this).hasClass('event')

            ) {
            }

            // });

            // })

    })