let burger = document.getElementsByClassName('header__burger')[0];
let menu = document.getElementsByClassName('nav__list')[0];

burger.addEventListener('click', _ => {
    menu.classList.toggle('active');
});