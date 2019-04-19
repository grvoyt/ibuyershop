(function($) {
    "use strict";

    /* start WOW js */
    new WOW().init();
    /* preloader  */

    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });

    /*----------------------------
     jQuery MeanMenu
    ------------------------------ */
    $('nav#dropdown').meanmenu();

    /*-----------------
    meanmenu 
    -----------------*/
    $('nav#mobile_menu_active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.menu',
    });
	
	/*------------------------
    meanmenu-remove-class
    ------------------------*/
    $(window).on('resize', function() {
        var wWidth = $(this).width();

        if (wWidth < 991) {
            // removing class
            $('.drop').addClass('m-d-removed');
            $('.m-d-removed').removeClass('drop');

            $('.third').addClass('t-h-m-removed');
            $('.t-h-m-removed').removeClass('third');

            $('.mega-menu').addClass('m-g-removed');
            $('.m-g-removed').removeClass('mega-menu');
        } else {
            // adding class
            $('.m-d-removed').addClass('drop');
            $('.drop').removeClass('m-d-removed');

            $('.third').removeClass('t-h-m-removed');
            $('.t-h-m-removed').addClass('third');

            $('.mega-menu').removeClass('m-g-removed');
            $('.m-g-removed').addClass('mega-menu');
        }
    }).resize();

    function cardFix(tag) {
        var block = $('.card_info_offer');
        if(!block.length) return;
        if(!!tag) window.card_info_offer = block.offset().top;
        var blLeft = block.offset().left;
        var blWidth = block.width();
        var topWindow = $(window).scrollTop() + 100;
        block.css('width',blWidth).css('left', blLeft);
        block[ (topWindow > window.card_info_offer) ? 'addClass' : 'removeClass' ]('fixed');
    }
    cardFix(true);

    /*-----------------
    sticky
    -----------------*/
    $(window).on('scroll', function() {
        if($('#buy').length) return;
        $('header')[($(window).scrollTop() > 85) ? 'addClass' : 'removeClass']('navbar-fixed-top');
        cardFix();
    });

    /*------------------------------
         counter
    ------------------------------ */
    $('.counter-up').counterUp();

    /*---------------------
    smooth scroll
    --------------------- */
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - 80
        }, 1200);
    });

    /*---------------------
    video-popup
    --------------------- */
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 300,
        preloader: false,
        fixedContentPos: false
    });

    /*---------------------
    funded-carousel
    --------------------- */
    function funded_carousel() {
        var owl = $(".funded-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 40,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 3,
            smartSpeed: 2000,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    funded_carousel();

    /*---------------------
    testimonial-carousel
    --------------------- */
    function testimonial_carousel() {
        var owl = $(".testimonial-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 40,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: false,
            items: 3,
            smartSpeed: 2000,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    testimonial_carousel();

    /*---------------------
    testimonial2-carousel
    --------------------- */
    function testimonial2_carousel() {
        var owl = $(".testimonial2-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 40,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 1,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });
    }
    testimonial2_carousel();

    function cards_caresel() {
        var owl = $(".card-carusel");
        owl.owlCarousel({
            loop: true,
            margin: 40,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 1,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });
    }
    cards_caresel();

    function resizeHeightBuy() {
        if(!$('#buy').length) return;
        var heightMenu = $('header').height();
        var heightWindow = $(window).height();
        var target = $('.buy_map');
        target.height( heightWindow - heightMenu );
    }
    resizeHeightBuy();



}(jQuery));
