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
    $(".owl-testimony").owlCarousel(
        {
            loop:true,
            items:3,
            dots:true,
            dotsEach: 2, 
            nav:false,
            autoplay:true,
            autoplayTimeout:2500,
            autoplayHoverPause:true,
        }
    );
  });

  $(document).ready(function(){
    $(".owl-gallery").owlCarousel(
        {
            loop:true,
            items:4,
            dots:true,
            dotsEach: 2, 
            nav:false,
            autoplay:true,
            autoplayTimeout:2500,
            autoplayHoverPause:true,
            margin:0,
           
        }
    );
  });
