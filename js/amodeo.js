/*!
 * AntonioAmodeo v0.1
 * Copyright © 2014 Antonio Amodeo
 * Created by Melvin Chien melvin.io
 */

 $(document).ready(function() {

    $("#carousel-testimonials").carousel();
    $(".js-tooltip").tooltip();

    var $portfolio = $("#portfolio-container");
    $portfolio.imagesLoaded( function() {
        $portfolio.isotope({
            itemSelector: ".portfolio-item",
            layoutMode: "masonry"
        });
    });

    $("#portfolio-filters").on("click", "button", function() {
        var filterValue = $(this).attr("data-filter");
        $("#portfolio-filters > .active").removeClass("active");
        $(this).addClass("active");
        $portfolio.isotope({
            filter: filterValue
        });
    });

    onResize();
    $(window).resize(onResize);
});

 onResize = function() {
    var bgHeight = $("#hero-background").height();
    $("#hero-container").height(bgHeight);
    $("#hero-logo").css("margin-top", bgHeight * 0.3);    
    $("#hero-logo").css("margin-bottom", bgHeight * 0.25);
    $("#portfolio-container").isotope("layout");
}