// document.documentElement.style.setProperty('--primaryColor', '#101010');

window.addEventListener('scroll', () => {
    document.getElementById('mainNavbar')
      .classList.toggle('scrolled', window.scrollY > 50);
  });