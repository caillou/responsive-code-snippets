/*globals $:false, setTimeout: false, window: false */

$(function updateSizes() {
    "use strict";
    var fontSize, width;

    fontSize = $('p').css('font-size');
    width = $('html').css('width');

    $('pre').html(
        "font-size: " + fontSize
            + "<br/>width: " + width
            + "<br/>screen.width: " + window.screen.width
            + "<br/>screen.availWidth: " + window.screen.availWidth
    );

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