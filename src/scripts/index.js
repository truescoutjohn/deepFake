import '../index.scss';

const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.sidebar__swicther-mode-image').addEventListener('click', function () {
    sidebar.classList.toggle('sidebar_night-mode');
    if (sidebar.classList.contains('sidebar_night-mode')) {
      document.querySelector('.sidebar__logo').src = './assets/img/logoNightMode.svg';
      document.querySelector('.logo').src = './assets/img/JeynixNightMode.png';
    } else {
      document.querySelector('.sidebar__logo').src = './assets/img/logo.svg';
      document.querySelector('.logo').src = './assets/img/Jeynix.svg';
    }
    main.classList.toggle('main_night-mode');
  });
});
