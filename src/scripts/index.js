import DisplayMenuHandler, { setWidthCarousel, clickBackMenuHandler } from './menu';
import '../index.scss';

const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');
const historyEvents = [];

const createAnimationYellow = function () {
  let interval = null;
  const FINAL_SATURATE = 1443;
  let startSaturate = 1;

  const mouseEnterHandler = function (event) {
    event.stopPropagation();
    interval = setInterval(() => {
      if (startSaturate >= FINAL_SATURATE) {
        clearInterval(interval);
      } else {
        startSaturate += 16;
        event.target.style.filter = `drop-shadow(0px 0px 10px #e2ff00) brightness(0) invert(84%)
          sepia(100%) brightness(106%) saturate(${startSaturate}%) hue-rotate(11deg) contrast(103%)`;
      }
    }, 1);
  };

  const mouseOutHandler = function (event) {
    event.stopPropagation();
    clearInterval(interval);
    interval = setInterval(() => {
      if (startSaturate <= 1) {
        clearInterval(interval);
        startSaturate = 1;
      } else {
        startSaturate -= 16;
        event.target.style.filter = `drop-shadow(0px 0px 10px #e2ff00) brightness(0) invert(84%)
          sepia(100%) brightness(106%) saturate(${startSaturate}%) hue-rotate(11deg) contrast(103%)`;
      }
    }, 1);
  };

  return {
    mouseEnterHandler,
    mouseOutHandler,
  };
};

const createAnimationBlack = function () {
  let interval = null;
  const FINAL_BRIGHTNESS = 97;
  let startBrightness = 97;
  const mouseEnterHandler = function (event) {
    event.stopPropagation();
    interval = setInterval(() => {
      if (startBrightness <= 1) {
        clearInterval(interval);
      } else {
        startBrightness -= 3;
        event.target.style.filter = `drop-shadow(0 0 10px #ffffff) brightness(${startBrightness}%)`;
      }
    }, 1);
  };

  const mouseOutHandler = function (event) {
    event.stopPropagation();
    clearInterval(interval);
    interval = setInterval(() => {
      if (startBrightness >= FINAL_BRIGHTNESS) {
        clearInterval(interval);
      } else {
        startBrightness += 3;
        event.target.style.filter = `drop-shadow(0 0 10px #ffffff) brightness(${startBrightness}%)`;
      }
    }, 1);
  };

  return {
    mouseEnterHandler,
    mouseOutHandler,
  };
};

function init() {
  const socials = [...document.querySelectorAll('.socials__link img')];
  const switcher = document.querySelector('.sidebar__switcher-mode-image');
  const english = document.querySelector('.sidebar__lang-item_en');
  const ukrainian = document.querySelector('.sidebar__lang-item_ua');
  const headline = document.querySelector('.headline');
  const content = document.querySelector('.content');

  english.addEventListener('click', function (event) {
    document.querySelector('#english').style.display = 'block';
    document.querySelector('#ukrainian').style.display = 'none';
  });
  ukrainian.addEventListener('click', function (event) {
    document.querySelector('#ukrainian').style.display = 'block';
    document.querySelector('#english').style.display = 'none';
  });
  switcher.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar_night-mode');

    historyEvents.forEach(function (object) {
      object.element.style.filter = '';
      object.element.removeEventListener('mouseenter', object.mouseEnterHandler);
      object.element.removeEventListener('mouseout', object.mouseOutHandler);
    });
    historyEvents.length = 0;

    if (sidebar.classList.contains('sidebar_night-mode')) {
      document.querySelector('.sidebar__logo').src = './assets/img/logoNightMode.svg';
      document.querySelector('.headline__image').srcset =
        './assets/img/faceNightMode.png 320w, ./assets/img/faceNightModeBig.png 769w';
      [...document.querySelectorAll('.order')].forEach(element =>
        element.classList.add('order_night-mode'),
      );
      document.querySelector('.contacts__heading').classList.add('contacts__heading_night-mode');
      document.querySelector('.menu').classList.add('menu_night-mode');
      document.querySelector('.lines').style.display = 'none';
      document.querySelector('.lines2').style.display = 'none';
      document.querySelector('.gradient-4').classList.remove('active');
      socials.forEach(element => {
        const { mouseEnterHandler, mouseOutHandler } = createAnimationBlack();
        element.addEventListener('mouseenter', mouseEnterHandler);
        element.addEventListener('mouseout', mouseOutHandler);

        historyEvents.push({ element, mouseEnterHandler, mouseOutHandler });
      });
      headline.classList.add('headline_night-mode');
    } else {
      document.querySelector('.sidebar__logo').src = './assets/img/logo.svg';
      document.querySelector('.logo').style.filter = '';
      document.querySelector('.headline__image').srcset =
        './assets/img/face.png 320w, ./assets/img/faceBig.png 769w';
      document.querySelector('.order').classList.remove('order_night-mode');
      document.querySelector('.contacts__heading').classList.remove('contacts__heading_night-mode');
      document.querySelector('.menu').classList.remove('menu_night-mode');
      socials.forEach(element => {
        const { mouseEnterHandler, mouseOutHandler } = createAnimationYellow();
        element.addEventListener('mouseenter', mouseEnterHandler);
        element.addEventListener('mouseout', mouseOutHandler);

        historyEvents.push({ element, mouseEnterHandler, mouseOutHandler });
      });
      headline.classList.remove('headline_night-mode');
    }
    document.querySelector(
      '.logo',
    ).style.filter = `brightness(0) saturate(100%) invert(91%) sepia(100%) saturate(0%) hue-rotate(306deg) brightness(108%) contrast(101%)`;
    main.classList.toggle('main_night-mode');
  });

  document.querySelector(
    '.logo',
  ).style.filter = `brightness(0) saturate(100%) invert(91%) sepia(100%) saturate(0%) hue-rotate(306deg) brightness(108%) contrast(101%)`;

  socials.forEach(element => {
    const { mouseEnterHandler, mouseOutHandler } = createAnimationYellow();
    element.addEventListener('mouseenter', mouseEnterHandler);
    element.addEventListener('mouseout', mouseOutHandler);

    historyEvents.push({ element, mouseEnterHandler, mouseOutHandler });
  });

  document.querySelector('.headline__button-wrapper').addEventListener('click', DisplayMenuHandler);
  setWidthCarousel();
  [...document.querySelectorAll('.back-menu')].forEach(element =>
    element.addEventListener('click', clickBackMenuHandler),
  );
  if (window.innerWidth > 768) {
    [...document.querySelectorAll('.headline, .contacts, .order')].forEach(element => {
      element.style.flexShrink = '0';
      element.style.flexBasis = window.innerHeight + 'px';
    });
    document.querySelector('.menu').style.flexShrink = '0';
    document.querySelector('.menu').style.flexBasis = 'auto';
  }

  if (window.innerWidth <= 768) {
    document.querySelector('#initial-screen').scrollIntoView({ behaviour: 'smooth' });
    document.querySelector('[href="#make-video"]').addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector('#make-video').scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('[href="#deep-fake"]').addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector('#deep-fake').scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('[href="#contacts"]').addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector('#contacts').scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (window.innerWidth > 768) {
    document.querySelector('[href="#make-video"]').addEventListener('click', function (event) {
      event.preventDefault();
      content.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    });

    document.querySelector('[href="#deep-fake"]').addEventListener('click', function (event) {
      event.preventDefault();
      content.scrollTo({ top: window.innerHeight * 2 + 100, behavior: 'smooth' });
    });

    document.querySelector('[href="#contacts"]').addEventListener('click', function (event) {
      event.preventDefault();
      content.scrollTo({
        top: window.innerHeight * 3 + 200,
        behavior: 'smooth',
      });
    });
  }
  [...document.querySelectorAll('.order__video-wrapper')].forEach(
    element =>
      (element.style.height = document.querySelector('.headline__image').height - 20 + 'px'),
  );
}
document.addEventListener('DOMContentLoaded', init);

function resizeBlock(event) {
  event.target.style.height = document.querySelector('.headline__image').height - 22 + 'px';
}

document.querySelector('.order__video').addEventListener('load', resizeBlock);
document.querySelector('.order__img').addEventListener('load', resizeBlock);
