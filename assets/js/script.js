// Navbar script
window.addEventListener('scroll', () => {
    document.getElementById('mainNavbar')
      .classList.toggle('scrolled', window.scrollY > 50);
  });
