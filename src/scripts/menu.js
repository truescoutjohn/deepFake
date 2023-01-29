export default offsetX => {
  document.querySelector('.main__wrapper').scrollTo({ left: -offsetX, behavior: 'smooth' });
};

export const setWidthCarousel = () => {
  [...document.querySelectorAll('.order, .contacts, .menu, .headline')].forEach(element => {
    element.style.flexBasis = `${window.innerWidth - 50}px`;
    element.style.flexShrink = '0';
  });
};

export function clickBackMenuHandler() {
  document.querySelector('.main__wrapper').scrollTo({ left: 0, behavior: 'smooth' });
}
