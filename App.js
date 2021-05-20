const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navlinks');
  const navlink = document.querySelectorAll('.navlinks li');
  
  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
  navlink.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 }s`;
    }

  });
    //burger animation
    burger.classList.toggle('toggle');
  
  });

}

navSlide();