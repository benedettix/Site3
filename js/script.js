jQuery(document).ready(function($) {

        setTimeout(function() {
            $('.loader-wrapper').fadeOut();
        }, 1500);
        

    $('#search-btn').click(function(e) {
        e.preventDefault();
        $('.search-wrapper').attr("style", "display:flex")
        $('.search-wrapper').animate({
            opacity: '1',
        })

    });

    $('#close-search').click(function (e) {
        e.preventDefault();
        $('.search-wrapper').animate({
            opacity: '0',
        }, function() {
            $('.search-wrapper').attr("style", "display:none")
        })
        
       
    })


        $('#hamburger-btn').click(function () {
         
            if($(this).hasClass('opened')) {
                $('nav ul').slideUp();
            }else {
                $('nav ul').slideDown();
            }
            
            $(this).toggleClass('opened');
        })







    $(window).scroll(function () {
        if($(window).scrollTop() > 40) {
            $('nav').addClass('fixed-nav');
        } else {
            $('nav').removeClass('fixed-nav');
        }
    })
});

