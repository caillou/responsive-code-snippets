/*globals $:false, setTimeout: false, window: false */

$(function updateSizes() {
    "use strict";


    $('p').each(function () {
        var fontSize, width, $p;

        $p = $(this);

        fontSize = $p.css('font-size');
        width = $('html').css('width');
        $p.next().html(
            "font-size: " + fontSize
        );

    });

    setTimeout(updateSizes, 100);
});

$(function () {
    "use strict";
    $('a[href="#half"]').click(function half(e) {
        e.preventDefault();
        $('html').css('font-size', parseInt($('html').css('font-size'), 10) * 0.5);
    });
    $('a[href="#double"]').click(function double(e) {
        e.preventDefault();
        $('html').css('font-size', parseInt($('html').css('font-size'), 10) * 2);
    });
});