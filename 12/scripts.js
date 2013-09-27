/*globals $:false, window: false */

$(function() { showInfo(); }); // on dom ready
$(window).on('resize orientationChanged', function() { showInfo(); }); // if something changes

function showInfo() {
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
}