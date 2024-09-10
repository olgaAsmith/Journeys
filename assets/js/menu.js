document.addEventListener('DOMContentLoaded', () => {
  const butonOpen = document.getElementById('burger-open');
  const buttonClose = document.getElementById('burger-close');
  const menu = document.getElementById('menu');
  const body = document.body;

  butonOpen.addEventListener('click', () => {
    menu.classList.add('header__menu--opened');
    body.classList.add('lock-scroll');
  });

  buttonClose.addEventListener('click', () => {
    menu.classList.remove('header__menu--opened');
    body.classList.remove('lock-scroll');
  });
});

function checkWindowSize() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    menu.classList.remove('slide-to-left');
  }
}

checkWindowSize();
