/*!
 * AntonioAmodeo v0.1
 * Copyright © 2014 Antonio Amodeo
 * Created by Melvin Chien melvin.io
 */

 $(document).ready(function() {
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
    $("#carousel-testimonials").carousel();
    $(".js-tooltip").tooltip();

    var $pf = $("#pf-container");
    $pf.imagesLoaded( function() {
        $pf.isotope({
            itemSelector: ".pf-item",
            layoutMode: "masonry"
        });
    });

    $("#pf-filters").on("click", ".js-filter", function() {
        var filterValue = $(this).attr("data-filter");
        $(".js-filter.active").removeClass("active");
        $(this).addClass("active");
        $pf.isotope({
            filter: filterValue
        });
    });

    onResize();
    $(window).resize(onResize);
    alert($("iframe").count());
    alert($("iframe").length);
});

onResize = function() {
    var bgHeight = $("#hero-background").height();
    $("#hero-container").height(bgHeight);
    $("#hero-logo").css("margin-top", bgHeight * 0.3);    
    $("#hero-logo").css("margin-bottom", bgHeight * 0.25);
}