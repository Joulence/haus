export const onclick = () => {
  let nav = document.getElementById('header-nav');
  let hamMenu = document.getElementById('hamMenu');
  let navMenu = document.getElementById('navMenu');
  let navMenu__2 = document.getElementById('navMenu2');

  let change = false;

  const addStyles = () => {
    nav.classList.add('nav-transform');
    navMenu.classList.add('menu-show');
    navMenu__2.classList.add('menu-show');
  }

  const removeStyles = () => {
    nav.classList.remove('nav-transform');
    navMenu.classList.remove('menu-show');
    navMenu__2.classList.remove('menu-show');
  }

  const ifWidth = innerWidth <= 820;

  const adapt = () => {
    if (ifWidth) {
      console.log(innerWidth);
      if (!navMenu.classList.contains('menu-show')) {
        addStyles();
      } else {
        removeStyles();
      }
    } else {
      console.log(false);
      removeStyles();
    }
  }

  window.addEventListener('resize', () => {
    if (innerWidth > 820) {
      removeStyles();
    }
  });

  hamMenu.addEventListener('click', () => {
    adapt();
  });
}