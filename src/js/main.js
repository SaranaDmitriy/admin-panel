document.addEventListener('DOMContentLoaded', () => {
  // START MENU
  // SLIDING MENU
  const menuControl = document.querySelector('.menu-control');
  const menuBlock = document.querySelector('.menu-block');
  const userWindow = document.querySelector('.user-window');

  if (menuControl) {
    menuControl.onclick = () => {
      menuControl.classList.toggle('menuControlActive');
      menuBlock.classList.toggle('menuBlockActive');
      userWindow.classList.toggle('userWindowActive');
    };
  }

  // HIGHLIGHTING THE MENU
  const loc = window.location.href;
  const curUrl = `/${loc.split('/').pop()}`;
  const menuItem = document.querySelectorAll('.menu-main>li>a');

  menuItem.forEach((el) => {
    const link = el.getAttribute('href');

    if (curUrl === link) {
      el.classList.add('currentLink');
    }
  });

  // MENU SEARCH
  const headerLeft = document.querySelector('.header-left');
  const magnifier = document.querySelector('.menu-search-item');
  const formSearch = document.querySelector('.form-search');

  if (magnifier) {
    magnifier.onclick = () => {
      magnifier.classList.toggle('magnifierActive');
      headerLeft.classList.toggle('headerLeftActive');
      formSearch.classList.toggle('formSearchActive');
    };
  }

  // LOGOUT
  const accountLogout = document.querySelector('.logout');
  if (accountLogout) {
    accountLogout.onclick = () => {
      window.location.href = '/';
    };
  }

  // CLOSE MENU WHEN CLICK OUTSIDE
  window.closeWhenClickOutside = (selector) => {
    const menuList = document.querySelectorAll(selector);

    for (let i = 0; i < menuList.length; i += 1) {
      menuList[i].querySelector('.btnDropdownMenu').addEventListener('click', () => {
        menuList[i].classList.toggle('active');

        menuList.forEach((el) => {
          if (el !== menuList[i]) {
            el.classList.remove('active');
          }
        });
      });
    }

    document.addEventListener('click', (e) => {
      const link = e.target.closest(selector);
      const openMenus = document.querySelectorAll(`${selector}.active`);

      if (link === null && openMenus) {
        openMenus.forEach((el) => {
          el.classList.remove('active');
        });
      }
    });
  };
  window.closeWhenClickOutside('.header-right-menu');
  // END MENU
});
