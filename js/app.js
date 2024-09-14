// JavaScript for the Navbar toggle functionality on smaller screens
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.main-nav');

  navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show-nav');
  });

  // Disable animations on mobile devices
  const mediaQuery = window.matchMedia('(max-width: 767px)');
  if (mediaQuery.matches) {
      document.querySelectorAll('.service-card, .blog-item').forEach(item => {
          item.style.transition = 'none';
      });
  }
});
