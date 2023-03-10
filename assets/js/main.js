$(document).ready(function(){
    //======= 05. meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "1199"
});
    //======= 14. WOW active
    new WOW().init();
    $(".slider-list").owlCarousel({
        loop:true,
        nav:true,
        items:4,
        margin:20,
        dots:true,
        navText:["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

})