/*globals $:false, setTimeout: false */

$(function updateSizes() {
    "use strict";

    var fontSize, width, $p;

    $p = $('p');
    fontSize = $p.css('font-size');
    width = $p.css('width');

    $('pre').html(
        "font-size: " + fontSize
            + "<br/>width: " + width
    );

    setTimeout(updateSizes, 100);
});