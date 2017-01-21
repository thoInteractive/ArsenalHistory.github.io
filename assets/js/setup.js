$(document).ready(function(){

//load youtube videos on click
 $('.activator').click(function() {
    var videoid = $(this).data("id");
    var frame = $("#" + videoid);
    if (frame.attr("src") === undefined) {
        frame.attr("src", frame.data("video"));
    }
});

// carousel setup
//if($('.carousel').length > 0){
//    $('.carousel').carousel();
//}

//load images after page load
 $('.responsive-img[data-src]').each(function() { 
     $(this).attr('src', $(this).data('src')); 
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots: false,
        },
        600:{
            items:3,
            nav:true,
            dots: false
        },
        1000:{
            items:3,
            nav:true,
            dots: false,
            loop:false
        }
    }
})



});