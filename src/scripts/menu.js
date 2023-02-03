import 'jquery';
import 'jquery-ui-bundle';

export default () => {
  document.querySelector('.main__wrapper').scrollTo({ left: 0, behavior: 'smooth' });
};

export const setWidthCarousel = () => {
  [...document.querySelectorAll('.order, .contacts, .menu, .headline')].forEach(element => {
    element.style.flexBasis = `${window.innerWidth - 50}px`;
    element.style.flexShrink = '0';
  });
};

export function clickBackMenuHandler(event) {
  $('.main__wrapper').animate({ scrollLeft: 0 }, 1000, 'easeInOutCirc');
  document.querySelector('.main__text').textContent = 'welcome';
}
