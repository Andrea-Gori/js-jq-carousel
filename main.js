$(document).ready(function () {
    next();
    back();

});



function next() {
    
    var right = $('.fa-angle-right');

    right.click(function () {
        var carosel = $('.images img.active');
        carosel.removeClass('active').next().addClass('active')
    })
}

function back() {

    var left = $('.fa-angle-left');

    left.click(function () {
        var carosel = $('.images img.active');
        carosel.removeClass('active').prev().addClass('active')
    })
}







