 // Detect window scroll and update navbar
 $(window).scroll(function(e){          
    if($(document).scrollTop() > 120) {
      $('#navbar').addClass("scroll");
    } else {
      $('#navbar').removeClass("scroll");
    } 
  });
