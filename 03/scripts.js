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