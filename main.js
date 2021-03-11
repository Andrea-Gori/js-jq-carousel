$(document).ready(function () {
    next();
    back();
});

function next() {
    
    var right = $('.fa-angle-right');

    right.click(function () {
        var carosel = $('.active');
        carosel.removeClass('active');

        if (carosel.hasClass('last')) {
            $('.first').addClass('active');
        } else {
            carosel.next().addClass('active');
        }
    })
}

function back() {

    var left = $('.fa-angle-left');

    left.click(function () {
        var carosel = $('.active');
        carosel.removeClass('active');

        if (carosel.hasClass('first')) {
            $('.last').addClass('active');
        } else {
            carosel.prev().addClass('active');
        }
    })
}




