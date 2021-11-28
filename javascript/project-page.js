// Initialize Project Navbar
var lastScrollTop = 1;

window.addEventListener("scroll", function(){  
   var st = window.pageYOffset || document.documentElement.scrollTop + '10px';  
   if (st > lastScrollTop){
       document.getElementById("project-navigation").style.top = "-80px";
   } else {
      document.getElementById("project-navigation").style.top = "0px";
   }
   lastScrollTop = st;
}, false);



// Initialize flickity.pkgd.min.js
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
    freeScroll: true,
    freeScrollFriction: 0.05,
    pageDots: false,
    prevNextButtons: false, 
    imagesLoaded: true,
});

var elem = document.querySelector('.main-carousel-2');
var flkty = new Flickity( elem, {
    freeScroll: true,
    freeScrollFriction: 0.05,
    pageDots: true,
    prevNextButtons: false, 
    imagesLoaded: true,
});

var elem = document.querySelector('.main-carousel-3');
var flkty = new Flickity( elem, {
    freeScroll: true,
    freeScrollFriction: 0.05,
    pageDots: true,
    prevNextButtons: false, 
    imagesLoaded: true,
});


// Initialize jquery.magnific-popup.js
$(document).ready(function() {

  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
    
  });

  $('.image-popup-fit-width').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: {
      verticalFit: false
    }
  });

  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

});