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

    $(".popup-youtube, .popup-vimeo").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    onResize();
    $(window).resize(onResize);
});

onResize = function() {
    var bgHeight = $("#hero-background").height();
    $("#hero-container").height(bgHeight);
    $("#hero-logo").css("margin-top", bgHeight * 0.3);    
    $("#hero-logo").css("margin-bottom", bgHeight * 0.25);
}