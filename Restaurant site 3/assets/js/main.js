ScrollReveal().reveal('.home__container', {
    delay: 200,
    duration: 2000,
    distance: '100px',
    origin: 'bottom'
  });
  
  ScrollReveal().reveal('.about', {
    delay: 200,
    duration: 2000,
    distance: '100px',
    origin: 'bottom'
  });
  
  ScrollReveal().reveal('.services', {
    delay: 200,
    duration: 2000,
    distance: '100px',
    origin: 'bottom'
  });
  
  ScrollReveal().reveal('.menu', {
    delay: 200,
    duration: 2000,
    distance: '100px',
    origin: 'bottom'
  });
  
  ScrollReveal().reveal('.app', {
    delay: 200,
    duration: 2000,
    distance: '100px',
    origin: 'bottom'
  });

  ScrollReveal().reveal('.contact', {
    delay: 200,
    duration: 2000,
    distance: '100px',
    origin: 'bottom'
  });

  ScrollReveal().reveal('.reservation-section', {
    delay: 200,
    duration: 2000,
    distance: '100px',
    origin: 'bottom'
  });

  ScrollReveal().reveal('.l-header', {
    delay: 200,
    duration: 2000,
    distance: '100px',
    origin: 'left'
  });

  ScrollReveal().reveal('.home__data', {
    delay: 200,
    duration: 2000,
    distance: '100px',
    origin: 'right'
  });

  ScrollReveal().reveal('.about__data', {
    delay: 200,
    duration: 2000,
    distance: '100px',
    origin: 'right'
  });

  ScrollReveal().reveal('.menu__content', {
    delay: 200,
    duration: 2000,
    distance: '100px',
    origin: 'left'
  });

  ScrollReveal().reveal('.app__stores', {
    delay: 200,
    duration: 2000,
    distance: '100px',
    origin: 'left'
  });

  ScrollReveal().reveal('.contact__button', {
    delay: 200,
    duration: 2000,
    distance: '100px',
    origin: 'top'
  });

  ScrollReveal().reveal('.footer__content', {
    delay: 200,
    duration: 2000,
    distance: '100px',
    origin: 'right'
  });
  let typed = new Typed (".auto-type", {
    strings: ["Tasty Food", "Cuisine", "Food Menu"],
    typeSpeed: 100,
    backSpeed:100,
    Loop: true
  });


  const navToggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  nav.style.transition = "transform 2s ease-in-out";
});