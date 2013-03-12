<?php
$idealWidth = 1200;
for ($i=2; $i < 40; $i++) {
    $previousWidth = $idealWidth / 16 * ($i-1);
    $width = $idealWidth / 16 * $i;
echo "@media only screen and (min-width: ${previousWidth}px) and (max-width: ${width}px) {
  /* phone */
  html {
    font-size: ${i}px;
  }
}

";
}