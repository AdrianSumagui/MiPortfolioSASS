const menu = document.querySelector('#navbar__mobile--menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {

    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

});