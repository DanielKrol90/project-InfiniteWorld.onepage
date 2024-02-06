 // Detect window scroll and update navbar
 window.addEventListener('scroll', function(e) {
  let navbar = document.getElementById('navbar');
  if (document.documentElement.scrollTop > 120) {
      navbar.classList.add('scroll');
  } else {
      navbar.classList.remove('scroll');
  }
});
