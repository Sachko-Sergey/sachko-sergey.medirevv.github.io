$(function () {
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev  arrow-slide-right"><img src="../images/arrow-left.png" /></button>',
        nextArrow: '<button type="button" class="slick-prev  arrow-slide-left"><img src="../images/arrow-right.png" /></button>',
    });

    $('input, select').styler();
});