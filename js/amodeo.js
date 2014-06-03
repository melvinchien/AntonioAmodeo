/*!
 * AntonioAmodeo v0.1
 * Copyright © 2014 Antonio Amodeo
 * Created by Melvin Chien melvin.io
 */

 $(document).ready(function() {
    onResize();
    $(window).resize(onResize);

    // ENABLE BOOTSTRAP CAROUSEL
    $("#carousel-testimonials").carousel({
        interval: "10000"
    });

    // ENABLE BOOTSTRAP TOOLTIPS
    $(".js-tooltip").tooltip();

    // ENABLE ISOTOPE
    var $pf = $("#pf-container");
    $pf.imagesLoaded( function() {
        $pf.isotope({
            itemSelector: ".pf-item",
            layoutMode: "fitRows"
        });
    });

    // BIND ISOTOPE FILTERS
    $("#pf-filters").on("click", ".js-filter", function() {
        var filterValue = $(this).attr("data-filter");
        $(".js-filter.active").removeClass("active");
        $(this).addClass("active");
        $pf.isotope({
            filter: filterValue
        });
    });

    // SMOOTH SCROLLING
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
              }, 500);
                return false;
            }
        }
    });

    // RESET VIDEOS
    // TODO
});

// ADJUSTS SIZE OF HERO UNIT
onResize = function() {
    var bgHeight = $("#hero-background").height();
    $("#hero-container").height(bgHeight);
    $("#hero-logo").css("margin-top", bgHeight * 0.3);    
    $("#hero-logo").css("margin-bottom", bgHeight * 0.25);
}