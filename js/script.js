//Animation on scroll
$(function () {
    new WOW().init();
});

//Scroll Ease
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var sectionID = $(this).attr('href');

        $('html, body').animate(
            {
                scrollTop: $(sectionID).offset().top - 64
            }, 1250, "easeInOutExpo"
        );
    })
});