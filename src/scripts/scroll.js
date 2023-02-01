const leftScrollHandler = (leftOffset, topOffset) => {
  return function scrollHandlerInner(event) {
    console.log(topOffset - 100);
    console.log(event.target.scrollTop);
    if (event.target.scrollLeft >= leftOffset - 100) {
      event.target.removeEventListener('scroll', scrollHandlerInner);
      const iframe = document.querySelector('iframe');
      const src = iframe.getAttribute('data-src');
      iframe.src = src;
      iframe.removeAttribute('data-src');
      document.querySelector('.lds-dual-ring').style.display = 'none';
    }
  };
};

const topScrollHandler = topOffset => {
  return function scrollHandlerInner(event) {
    if (event.target.scrollTop >= topOffset - 100) {
      event.target.removeEventListener('scroll', scrollHandlerInner);
      const iframe = document.querySelector('iframe');
      const src = iframe.getAttribute('data-src');
      iframe.src = src;
      iframe.removeAttribute('data-src');
      document.querySelector('.lds-dual-ring').style.display = 'none';
    }
  };
};
export default (leftOffset, topOffset) => {
  if (window.innerWidth <= 768) {
    document
      .querySelector('.main__wrapper')
      .addEventListener('scroll', leftScrollHandler(leftOffset));
  } else {
    document.querySelector('.content').addEventListener('scroll', topScrollHandler(topOffset));
  }
};
