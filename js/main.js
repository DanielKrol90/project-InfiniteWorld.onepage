 // Detect window scroll and update navbar
 window.addEventListener('scroll', function(e) {
  let navbar = document.getElementById('navbar');
  if (document.documentElement.scrollTop > 120) {
      navbar.classList.add('scroll');
  } else {
      navbar.classList.remove('scroll');
  }
});

// script for carousel working
$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop:true,
            items:3,
            dots:false,
            dotsEach:3,
            nav:false,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            clone: false,
        }
    );
  });