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

$(document).ready(function(){

    // hide #back-top first

    $("#back-bottom").show();

    // fade in #back-top
    $(function () {
        var $elem = $('body')
        $(window).scroll(function () {
            if($(window).scrollTop() + $(window).height() == $(document).height()) {
                $('#back-bottom').hide();
            } else {
                $('#back-bottom').show();
            }
        });

        // scroll body to 0px on click
        $('#back-bottom a').click(function () {
            $('body,html').animate({ scrollTop: $elem.height()}, 800);
            return false;
        });
    });

    (function(){

    // List your words here:
    /*var words = [
        'Olá!',
        '¡Hola!',
        'Bonjour',
        'Ciao',
        'Hallo',
        'こんにちは',
        '嗨',
        'привет',
        ], i = 0;

    setInterval(function(){
        $('#tag').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 1500);*/

})();

});
