(() => {
  // SLIDING MENU
  const menuControl = document.querySelector('.menu-control');
  const menuBlock = document.querySelector('.menu-block');
  const userWindow = document.querySelector('.user-window');

  menuControl.onclick = () => {
    menuControl.classList.toggle('menuControlActive');
    menuBlock.classList.toggle('menuBlockActive');
    userWindow.classList.toggle('userWindowActive');
  };

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

  magnifier.onclick = () => {
    magnifier.classList.toggle('magnifierActive');
    headerLeft.classList.toggle('headerLeftActive');
    formSearch.classList.toggle('formSearchActive');
  };

  // CLOSE MENU WHEN CLICK OUTSIDE
  function closeWhenClickOutside(selector) {
    const menuList = document.querySelectorAll(selector);

    for (let i = 0; i < menuList.length; i++) {
      menuList[i].querySelector('img.btnMenu').addEventListener('click', () => {
        menuList[i].classList.toggle('activeWindow');

        menuList.forEach((el) => {
          if (el !== menuList[i]) {
            el.classList.remove('activeWindow');
          }
        });
      });
    }

    document.addEventListener('click', (e) => {
      const link = e.target.closest(selector);
      const openMenus = document.querySelectorAll(`${selector}.activeWindow`);

      if (link === null && openMenus) {
        openMenus.forEach((el) => {
          el.classList.remove('activeWindow');
        });
      }
    });
  }

  closeWhenClickOutside('.header-right-menu');
})();


// const menuList = document.querySelectorAll('.menu');

// for (let i = 0; i < menuList.length; i++) {
//   menuList[i].querySelector('img.btnMenu').addEventListener('click', () => {
//     menuList[i].classList.toggle('activeWindow');

//     menuList.forEach((el) => {
//       if (el !== menuList[i]) {
//         el.classList.remove('activeWindow');
//       }
//     });
//   });
// }

// function closeWhenClickOutside(selector) {
//   document.addEventListener('click', (e) => {
//     const link = e.target.closest(selector);
//     const openMenus = document.querySelectorAll(`${selector}.activeWindow`);

//     if (link === null && openMenus) {
//       openMenus.forEach((el) => {
//         el.classList.remove('activeWindow');
//       });
//     }
//   });
// }

// closeWhenClickOutside('.menu');