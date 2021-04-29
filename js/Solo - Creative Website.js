/*==========================================
|  |   |   |  Preloader 
============================================ */
$(window).on('load',function(){
    $('#status').fadeOut();
    $('#preloader').delay(300).fadeOut();
});







/*==========================================
|  |   |   |  White Navigation
============================================ */
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancleBtn = document.querySelector(".cancle-btn");
menuBtn.onclick = ()=> {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabledScroll");
}
cancleBtn.onclick = ()=> {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabledScroll");
}

window.onscroll = ()=> {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}


$(function (){

    //show / hide nav on page load
    showHideNav();

    $(window).scroll(function(){
        showHideNav();
    });

    function showHideNav(){
        if($(window).scrollTop() > 50 ) {
            //show white nav
            //alert("you");
            $(".navbar").addClass("white-nav-top");
            //show dark logo
            $(".logos img").attr("src","css/img/logo/logo-dark.png");
        }
        else {
            //hide white nav
            $(".navbar").removeClass("white-nav-top");
            //show white logo
            $(".logos img").attr("src", "css/img/logo/logo.png");
        }
    }
}); 







/*==========================================
|  |   |   |  Team 
============================================ */
$(function () {
    $('#team-member').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" id="left"></i>', '<i class=" fa fa-angle-right" id="right"></i>'],
        responsive: {
            //breackpoint from 0 up
            0: {
               items:1
            },
            //breackpoint from 480 up
            480:{
                items:2
            }
            
        }
    });
});


/*==========================================
|  |   |   |  Progress Bars 
============================================ */
$(function(){

    $("#progress-elements").waypoint(function(){

        $('.progress-bar').each(function(){
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%" 
            } , 1000);
    });

    this.destroy();
}, {
    
    offset: 'bottom-in-view'
});
});




/*==========================================
|  |   |   |  Services
============================================ */
$(function(){
    $("#services-tabs").responsiveTabs({
        animation:'slide'
    })
});











/*==========================================
|  |   |   |  Portfolio (work)
============================================ */
$(document).ready(function (){
    $('.list').click(function (){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.itemBox').show('1000');
        }
        else{
            $('.itemBox').not('.'+value).hide('1000');
            $('.itemBox').filter('.'+value).show('1000');
        }
    });

    // add active class on selected item 
    $('.list').click(function (){
        $(this).addClass('active').siblings().removeClass('active');
    });
});



$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});





/* Mganifier */ 

$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',      // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});






/*==========================================
|  |   |   |  Testimonial
============================================ */
$(function () {
    $('#testimonial-slider').owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 900,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class=" fa fa-angle-right"></i>']
});
});









/*==========================================
|  |   |   |  Stats
============================================ */
$(function() {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});












/*==========================================
|  |   |   |  Clients
============================================ */
$(function () {
    $('#clients-list').owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class=" fa fa-angle-right"></i>'],
    responsive: {
        //breackpoint from 0 up
        0: {
           items:1
        },
        //breackpoint from 480 up
        480:{
            items:3
        },
        //breackpoint from 768 up
        768:{
            items:6
        }
        
    }
  });
  });







/*==========================================
|  |   |   |  Animation
============================================ */
// Animate on Scroll //
$(function () {
    new WOW().init();
});

// Home animation on page load
$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});

