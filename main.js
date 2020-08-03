const navBar = document.querySelector('.nav__bar');
const menu  = document.querySelector('.menu');

menu.addEventListener('click', () => {
    navBar.classList.toggle('nav__bar--active')
})
