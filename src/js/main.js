(() => {
  const menuControl = document.querySelector('.menu-control');
  const menuBlock = document.querySelector('.menu-block');
  const userWindow = document.querySelector('.user-window');

  menuControl.onclick = () => {
    menuControl.classList.toggle('menuControlActive');
    menuBlock.classList.toggle('menuBlockActive');
    userWindow.classList.toggle('userWindowActive');
  };


  const loc = window.location.href;
  const curUrl = `/${loc.split('/').pop()}`;
  const menuItem = document.querySelectorAll('.menu-main>li>a');

  menuItem.forEach((el) => {
    const link = el.getAttribute('href');

    if (curUrl === link) {
      el.classList.add('currentLink');
    }
  });
})();