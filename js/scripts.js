$(window).load(function () {

    $(".page-loader div").delay(0).fadeOut();
    $(".page-loader").delay(200).fadeOut("slow");

});


// BACK TO TOP

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}



$(document).ready(function () {
    
    /* WebFont.load({
    google: {
      families: ['Work+Sans:300,300i,400,400i,700,700i'],
      url: ['https://fonts.googleapis.com/css2'], 
    }
    }); */

    // hide #back-top first

    $("#back-bottom").show();

    // fade in #back-top
    $(function () {
        var $elem = $('body')
        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                $('#back-bottom').hide();
            } else {
                $('#back-bottom').show();
            }
        });

        // scroll body to 0px on click
        $('#back-bottom a').click(function () {
            $('body,html').animate({
                scrollTop: $elem.height()
            }, 800);
            return false;
        });
        
    });
    
    $('#toggle').click(function() {
    $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
    
    $(window).scroll(function(){
        $(".banner").css("opacity", 1 - $(window).scrollTop() / 500);
    });

})();

