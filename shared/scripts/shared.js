// Handle Overlay Menu for mobile devices
const menu = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

menu.addEventListener('click', () => {
    if(navbar.classList.contains('collapse')) {
        navbar.classList.remove('collapse');
        menu.innerHTML = '<i class="fas fa-times fa-2x"></i>';
        menu.classList.add('mobile-menu');
    } else {
        navbar.classList.add('collapse');
        menu.innerHTML = '<i class="fas fa-bars fa-2x">';
        menu.classList.remove('mobile-menu');
    }
});