// Handle Overlay Menu for mobile devices

const menu = document.getElementById('toggle');

function mobileMenu() {
    const navbar = document.getElementById('navbar');
    const body = document.querySelector('body');
    const menuIcon = document.querySelector('#toggle i')

    navbar.classList.toggle('collapse');
    menu.classList.toggle('js-mobile-menu');
    body.classList.toggle('js-mobile-menu-open');
    menuIcon.classList.toggle('fa-times');
    menuIcon.classList.toggle('fa-bars');
}

menu.addEventListener('click', () => {
    mobileMenu();
});