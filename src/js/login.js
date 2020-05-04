document.addEventListener('DOMContentLoaded', () => {
  const register = document.querySelector('.register_btn');
  const login = document.querySelector('.login_btn');
  const loginMainFrst = document.querySelectorAll('.login_main');
  const welcome = document.querySelectorAll('.welcome');
  const none = 'none';
  const flex = 'flex';

  loginMainFrst[1].style.display = none;

  register.onclick = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      register.style.display = none;
      login.style.display = flex;
    }
    loginMainFrst[0].style.display = none;
    loginMainFrst[1].style.display = flex;
    welcome[1].style.paddingBottom = '4%';
    document.querySelector('.input_login_click').style.marginBottom = '4.5%';
    document.querySelector('.reg_btn').style.marginTop = '5.4%';
  };

  login.onclick = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      login.style.display = none;
      register.style.display = flex;
    }
    loginMainFrst[0].style.display = flex;
    loginMainFrst[1].style.display = none;
  };
});
