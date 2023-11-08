/*-----------------------------------------------------------------------------------
    Template Name: Restly - IT Solutions & Technology HTML Template
    Template URI: https://webtend.net/demo/html/restly/
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.0

    Note: This is Main JS File.
-----------------------------------------------------------------------------------
	CSS INDEX
	===================
    01. Header
    02. Dropdown menu
    03. Submenu
    04. Search Box
    05. Video Popup
    06. Product Image Popup
    07. Product Gallery
    08. Product Navs
    09. Scroll to Top
    10. Client Logo
    11. Gallery Three
    12. Testimonial One
    13. Testimonial Two
    14. Testimonial Three
    15. Fact Counter
    16. Gallery Filtering
    17. WOW Animation
    18. OnePage Nav Scroll
    19. Preloader
    
-----------------------------------------------------------------------------------*/

(function ($) {

    "use strict";

    $(document).ready(function () {

        // 01. Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();
        
        
        // 02. Dropdown menu
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });
        
        // 03. Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });
            
            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                // e.preventDefault();
            });
        }
        
        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });
        }
        
        
        // 04. Search Box
		$('.nav-search > button').on('click', function () {
			$('.nav-search form').toggleClass('hide');
		});
        
        
        // Hide Box Search WHEN CLICK OUTSIDE
		if ($(window).width() > 767){
			$('body').on('click', function (event) {
				if ($('.nav-search > button').has(event.target).length == 0 && !$('.nav-search > button').is(event.target)
					&& $('.nav-search form').has(event.target).length == 0 && !$('.nav-search form').is(event.target)) {
					if ($('.nav-search form').hasClass('hide') == false) {
						$('.nav-search form').toggleClass('hide');
					};
				}
			});
		}
        
        
        // 05. Video Popup
        if ($('.video-play').length) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        } 
        
        
        // 06. Product Image Popup
        $('.product-image-preview').magnificPopup({
            type:'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
        
        // 07. Product Gallery
        if ($('.product-gallery').length) {
            $('.product-gallery').slick({
                dots: false,
                infinite: true,
                autoplay: false,
                arrows: false,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.product-thumb',
            });
        } 
        
        // 08. Product Navs
        if ($('.product-thumb').length) {
            $('.product-thumb').slick({
                dots: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 2000,
                arrows: false,
                speed: 1000,
                focusOnSelect: true,
                asNavFor: '.product-gallery',
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 4,
                        }
                    }
                ]
            });
        } 
        
        // 09. Scroll to Top
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }

        // 10. Client Logo
        if ($('.logo-carousel-wrap').length) {
            $('.logo-carousel-wrap').slick({
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                speed: 1000,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 2,
                        }
                    }
                ]
            });
        } 
        
        
        // 11. Gallery Three
        if ($('.gallery-three-wrap').length) {
            $('.gallery-three-wrap').slick({
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: true,
                prevArrow: $('.gallery-prev'),
                nextArrow: $('.gallery-next'),
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        } 
        
        
        // 12. Testimonial One
        if ($('.testimonial-wrap').length) {
            $('.testimonial-wrap').slick({
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false,
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        } 
               
        
        // 13. Testimonial Two
        if ($('.testimonial-two-active').length) {
            $('.testimonial-two-active').slick({
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        } 
        
        
        // 14. Testimonial Three
        if ($('.testimonial-three-active').length) {
            $('.testimonial-three-active').slick({
                dots: false,
                infinite: false,
                autoplay: false,
                fade: true,
                autoplaySpeed: 5000,
                arrows: false,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.testimonial-three-thumbs'
            });
        } 
        
        if ($('.testimonial-three-thumbs').length) {
            $('.testimonial-three-thumbs').slick({
                dots: false,
                infinite: false,
                autoplay: false,
                autoplaySpeed: 5000,
                arrows: false,
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                focusOnSelect: true,
                asNavFor: '.testimonial-three-active'
            });
        } 
        
        
         /* 15. Fact Counter + Text Count - Our Success */
        if ($('.success-item').length) {
            $('.success-item').appear(function () {

                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }
        
        
        // 16. Gallery Filtering
        $(".portfolio-filter li").on('click', function () {
            $(".portfolio-filter li").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr('data-filter');
            $(".portfolio-wrap").isotope({
                itemSelector: '.item',
                filter: selector,
            });

        });
        
        
        // 17. WOW Animation
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
        
         
        // 18. OnePage Nav Scroll
        $(".onepage a").on('click', function(e){
            e.preventDefault();
            var hash = this.hash;
            var position = $(hash).offset().top;
            $("html").animate({
                scrollTop : position
            },1000);
        });
        
        
    });
    
    
    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

    $(window).on('resize', function () {
        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');
        navcollapse.children('ul').hide();
        navcollapse.children('.megamenu').hide();

    });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        // 19. Preloader
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();

        // Gallery Isotope Filtering
       if ($('.portfolio-wrap').length) {
            $(".portfolio-wrap").isotope({
                itemSelector: '.item',
            });
        };
        
    });

})(window.jQuery);



// newjs
// Check the window width and remove 'show' class from collapse element if width <= 768px
$(document).ready(function () {
    $(window).resize(function () {
        if ($(window).width() <= 768) {
            $('#collapseExample1').removeClass('show');
        } else {
            $('#collapseExample1').addClass('show');
        }
    });
});




const ellipsisContents1 = document.querySelectorAll(".elllipse-text1");
const expandButtons1 = document.querySelectorAll(".expand-button1");

expandButtons1.forEach((button, index) => {
    button.addEventListener("click", function() {
        // Toggle ellipsis class to expand or collapse content for the corresponding index
        ellipsisContents1[index].classList.toggle("elllipse-text1");

        // Change button text and arrow icon based on ellipsis class presence
        if (ellipsisContents1[index].classList.contains("elllipse-text1")) {
            button.innerHTML = "Read More <i class='fas fa-arrow-right ml-1 font-13'></i>";
        } else {
            button.innerHTML = "Read Less <i class='fas fa-arrow-left ml-1 font-13'></i>"; // You can change the arrow direction for "Read Less"
        }
    });
});


const ellipsisContents = document.querySelectorAll(".elllipse-text");
const expandButton = document.querySelector(".expand-button");

let isCollapsed = true;

expandButton.addEventListener("click", function() {
    isCollapsed = !isCollapsed;
    
    ellipsisContents.forEach(content => {
        if (isCollapsed) {
            content.classList.add("elllipse-text");
        } else {
            content.classList.remove("elllipse-text");
        }
    });

    // Change button text and arrow icon based on ellipsis class presence
    if (isCollapsed) {
        expandButton.innerHTML = "Read More <i class='fas fa-arrow-right ml-1 font-13'></i>";
    } else {
        expandButton.innerHTML = "Read Less <i class='fas fa-arrow-left ml-1 font-13'></i>";
    }
});



$(document).ready(function () {
    initializeSlickSlider(); // Call the function when the page loads
    //$(window).resize(initializeSlickSlider); // Call the function on window resize
});

function initializeSlickSlider() {
    if ($(window).width() < 768) {
        // Append the slider if the screen width is less than 768 pixels
        $('.slider-container').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite:true,
        });
    } else {
        // Destroy the slider if it exists and the screen width is larger
        if ($('.slider-container').hasClass('slick-initialized')) {
            $('.slider-container').slick('unslick');
        }
    }
}

$(document).ready(function(){
    if ($(window).width() < 768) {
        $('#bookingform').removeClass('show');
	$('#bookingform').show();
    }

    else{
        $('#bookingform').addClass('show');
    }
   
})


