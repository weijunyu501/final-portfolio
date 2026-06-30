let lastScrollTop = 0;

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
 
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 60) {
    
    navbar.style.transform = 'translateY(-100%)';
  } else {
   
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop;
});