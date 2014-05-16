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
    var bgHeight = $("#hero-background").height();
    $("#hero-container").height(bgHeight);
    $("#hero-logo").css("padding-top", bgHeight * 0.3);    
    $("#hero-logo").css("padding-bottom", bgHeight * 0.3);
}