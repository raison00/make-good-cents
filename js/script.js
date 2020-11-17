$(function() {
    // only run JS on desktop
    if ( $('.show-for-large-up').is(':visible') ) {
        // Parallax backgrounds
        $(window).scroll(function () {
            $(".mgc-hero").css("background-position","50% -" + ($(this).scrollTop() / 2) + "px");
        });
        // Slick slider
        $(".mgc-slick").slick({
            dots: true,
            prevArrow: "<div class='mgc-arrow-left'></div>",
            nextArrow: "<div class='mgc-arrow-right'></div>",
        });
    };
 });