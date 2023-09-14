import DisplayMenuHandler, { setWidthCarousel, clickBackMenuHandler } from './menu';
import '../index.scss';
import 'jquery';
import 'jquery-ui-bundle';

const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');
const AMOUNT_BLOCK = 6;
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

const makeActiveLink = event => {
  if (
    event.target.classList.contains('navigation__link') &&
    event.target.classList.contains('links__link')
  ) {
    return;
  }

  if (document.querySelector('a.active')) {
    document.querySelector('a.active').classList.remove('active');
  }
  event.target.classList.add('active');
};

function init() {
  const socials = [...document.querySelectorAll('.socials__link img')];
  const switcher = document.querySelector('.sidebar__switcher-mode-image');
  const english = document.querySelector('.sidebar__lang-item_en');
  const ukrainian = document.querySelector('.sidebar__lang-item_ua');
  const headline = document.querySelector('.headline');
  const content = document.querySelector('.content');

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
      // document.querySelector('.headline__image').srcset =
      //   './assets/img/face.png 320w, ./assets/img/faceBig.png 769w';
      [...document.querySelectorAll('.order')].forEach(element =>
        element.classList.remove('order_night-mode'),
      );
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

  english.addEventListener('click', function () {
    [...document.querySelectorAll('.en')].forEach(element => {
      element.classList.remove('visible');
      element.classList.add('visible');
      element.nextElementSibling.classList.remove('visible');
    });
  });

  ukrainian.addEventListener('click', function () {
    [...document.querySelectorAll('.uk')].forEach(element => {
      element.classList.add('visible');
      element.previousElementSibling.classList.remove('visible');
    });
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
    document.querySelector('#initial-screen').scrollIntoView({ behaviour: 'instant' });

    [...document.querySelectorAll('[href="#jeynix"]')].forEach(element =>
      element.addEventListener('click', function (event) {
        event.preventDefault();
        $('.main__wrapper').animate(
          { scrollLeft: window.innerWidth - 50 + 60 },
          1000,
          'easeInOutCirc',
        );
      }),
    );

    [...document.querySelectorAll('[href="#make-video"]')].forEach(element =>
      element.addEventListener('click', function (event) {
        event.preventDefault();
        $('.main__wrapper').animate(
          { scrollLeft: (window.innerWidth - 50) * 2 + 60 },
          1000,
          'easeInOutCirc',
        );
      }),
    );

    [...document.querySelectorAll('[href="#deep-fake"]')].forEach(element =>
      element.addEventListener('click', function (event) {
        event.preventDefault();
        $('.main__wrapper').animate(
          { scrollLeft: (window.innerWidth - 50) * 3 + 60 },
          1000,
          'easeInOutCirc',
        );
      }),
    );

    [...document.querySelectorAll('[href="#old-videos"]')].forEach(element =>
      element.addEventListener('click', function (event) {
        event.preventDefault();
        $('.main__wrapper').animate(
          { scrollLeft: (window.innerWidth - 50) * 4 + 60 },
          1000,
          'easeInOutCirc',
        );
      }),
    );

    [...document.querySelectorAll('[href="#contacts"]')].forEach(element =>
      element.addEventListener('click', function (event) {
        event.preventDefault();
        $('.main__wrapper').animate(
          { scrollLeft: (window.innerWidth - 50) * 5 + 60 },
          1000,
          'easeInOutCirc',
        );
      }),
    );

    [...document.querySelectorAll('[href="#about"]')].forEach(element =>
      element.addEventListener('click', function (event) {
        event.preventDefault();
        $('.main__wrapper').animate(
          { scrollLeft: (window.innerWidth - 50) * 6 + 60 },
          1000,
          'easeInOutCirc',
        );
      }),
    );
  }

  if (window.innerWidth > 768) {
    document.querySelector('[href="#jeynix"]').addEventListener('click', function (event) {
      event.preventDefault();
      $('.content').animate({ scrollTop: 0 }, 1000, 'easeInOutCirc');
    });

    [...document.querySelectorAll('[href="#make-video"]')].forEach(element =>
      element.addEventListener('click', function (event) {
        event.preventDefault();
        $('.content').animate(
          { scrollTop: content.scrollHeight / AMOUNT_BLOCK },
          1000,
          'easeInOutCirc',
        );
      }),
    );

    [...document.querySelectorAll('[href="#deep-fake"]')].forEach(element =>
      element.addEventListener('click', function (event) {
        event.preventDefault();
        $('.content').animate(
          { scrollTop: (content.scrollHeight / AMOUNT_BLOCK) * 2 },
          1000,
          'easeInOutCirc',
        );
      }),
    );

    [...document.querySelectorAll('[href="#old-videos"]')].forEach(element =>
      element.addEventListener('click', function (event) {
        event.preventDefault();
        $('.content').animate(
          { scrollTop: (content.scrollHeight / AMOUNT_BLOCK) * 3 },
          1000,
          'easeInOutCirc',
        );
      }),
    );

    [...document.querySelectorAll('[href="#contacts"]')].forEach(element =>
      element.addEventListener('click', function (event) {
        event.preventDefault();
        $('.content').animate(
          { scrollTop: (content.scrollHeight / AMOUNT_BLOCK) * 4 },
          1000,
          'easeInOutCirc',
        );
      }),
    );

    [...document.querySelectorAll('[href="#about"]')].forEach(element =>
      element.addEventListener('click', function (event) {
        event.preventDefault();
        $('.content').animate(
          { scrollTop: (content.scrollHeight / AMOUNT_BLOCK) * 5 },
          1000,
          'easeInOutCirc',
        );
      }),
    );
  }

  document.querySelector('[href="#jeynix"]').addEventListener('click', function (event) {
    document.querySelector('.main__text').textContent = 'welcome';
  });

  [...document.querySelectorAll('[href="#deep-fake"]')].forEach(element =>
    element.addEventListener('click', function (event) {
      makeActiveLink(event);
      document.querySelector('.main__text').textContent = 'face swap';
    }),
  );

  [...document.querySelectorAll('[href="#make-video"]')].forEach(element =>
    element.addEventListener('click', function (event) {
      makeActiveLink(event);
      document.querySelector('.main__text').textContent = 'make-up';
    }),
  );

  [...document.querySelectorAll('[href="#old-videos"]')].forEach(element =>
    element.addEventListener('click', function (event) {
      makeActiveLink(event);
      document.querySelector('.main__text').textContent = 'oldvideo';
    }),
  );

  [...document.querySelectorAll('[href="#contacts"]')].forEach(element =>
    element.addEventListener('click', function (event) {
      makeActiveLink(event);
      document.querySelector('.main__text').textContent = 'contacts';
    }),
  );

  [...document.querySelectorAll('[href="#about"]')].forEach(element =>
    element.addEventListener('click', function (event) {
      makeActiveLink(event);
      document.querySelector('.main__text').textContent = 'about';
    }),
  );

  [...document.querySelectorAll('.order__video-wrapper, .order__overlay')].forEach(
    element =>
      (element.style.height =
        document.querySelector('.initial-image').height + 2 <= 100
          ? '361px'
          : document.querySelector('.initial-image').height - 18 + 'px'),
  );

  document.querySelector('.initial-wrapper').style.height =
    document.querySelector('.initial-image').height + 2 <= 100
      ? '361px'
      : document.querySelector('.initial-image').height + 2 + 'px';
}

document.addEventListener('DOMContentLoaded', init);

function resizeBlock(event) {
  event.target.style.height = 'calc(100% - 2px)';
}

[...document.querySelectorAll('.order__video')].forEach(element =>
  element.addEventListener('load', resizeBlock),
);
// document.querySelector('.order__img').addEventListener('load', resizeBlock);
