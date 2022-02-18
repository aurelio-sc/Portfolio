const menu = document.querySelector('.menu');
const navHeight = menu.offsetHeight;

function addShadow() {
    if (window.scrollY >= navHeight) {
      menu.classList.add('rolling');
    } else {
      menu.classList.remove('rolling');
    };
  };

window.addEventListener('scroll', () => {
    addShadow();
});