/*!
 * AntonioAmodeo v0.1
 * Copyright © 2014 Antonio Amodeo
 * Created by Melvin Chien melvin.io
 */

 $(document).ready(function() {
    onResize();

    $(window).resize(onResize);
});

onResize = function() {
    $("#hero-container").height($("#hero-background").height());
}