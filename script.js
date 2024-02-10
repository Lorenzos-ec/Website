// JavaScript code 

// For example:

// Toggle mobile navigation
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('open');
})