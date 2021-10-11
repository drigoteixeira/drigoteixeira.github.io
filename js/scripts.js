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
    
    
    // HEADER
    
    (function(){

    var doc = document.documentElement;
    var w   = window;

    /*
    define four variables: curScroll, prevScroll, curDirection, prevDirection
    */

    var curScroll;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = 0;
    var prevDirection = 0;

    /*
    how it works:
    -------------
    create a scroll event listener
    create function to check scroll position on each scroll event,
    compare curScroll and prevScroll values to find the scroll direction
    scroll up - 1, scroll down - 2, initial - 0
    then set the direction value to curDirection
    compare curDirection and prevDirection
    if it is different, call a function to show or hide the header
    example:
    step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
    step 2: user scrolls down again: curDirection 2, prevDirection 2 > already hidden, do nothing
    step 3: user scrolls up: curDirection 1, prevDirection 2 > show header
    */

    var header = document.getElementById('site-header');
    var toggled;
    var threshold = 200;

    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop;
        if(curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        }
        else {
            //scrolled up
            curDirection = 1;
        }

        if(curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if(toggled) {
            prevDirection = curDirection;
        }
    };

    var toggleHeader = function() { 
        toggled = true;
        if(curDirection === 2 && curScroll > threshold) {
            header.classList.add('hide');
        }
        else if (curDirection === 1) {
            header.classList.remove('hide');
        }
        else {
            toggled = false;
        }
        return toggled;
    };

    window.addEventListener('scroll', checkScroll);
        
    function scrollBanner() {
      $(document).scroll(function(){
        var scrollPos = $(this).scrollTop();
        $('#banner-text').css({
          'top' : (scrollPos/3)+'px',
          'opacity' : 1-(scrollPos/510)
        });
        $('#banner').css({
          'background-position' : 'center ' + (-scrollPos/2)+'px'
        });
      });    
    }
    scrollBanner();    

})();

})();




