document.addEventListener('DOMContentLoaded', () => {
  const register = document.querySelector('.register_btn');
  const login = document.querySelector('.login_btn');
  const loginMainFirst = document.querySelectorAll('.login_main');
  const welcome = document.querySelectorAll('.welcome');
  const none = 'none';
  const flex = 'flex';

  if (loginMainFirst[1]) {
    loginMainFirst[1].style.display = none;
  }

  if (register) {
    register.onclick = () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        register.style.display = none;
        login.style.display = flex;
      }
      loginMainFirst[0].style.display = none;
      loginMainFirst[1].style.display = flex;
      welcome[1].style.paddingBottom = '4%';
      document.querySelector('.input_login_click').style.marginBottom = '4.5%';
      document.querySelector('.reg_btn').style.marginTop = '5.4%';
    };
  }

  if (login) {
    login.onclick = () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        login.style.display = none;
        register.style.display = flex;
      }
      loginMainFirst[0].style.display = flex;
      loginMainFirst[1].style.display = none;
    };
  }
});
