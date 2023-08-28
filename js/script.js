const hamburgerButton = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');
const h1 = document.querySelector('h1');
const navLinksAll = document.querySelectorAll('.nav__links a');
const iframe = document.querySelector('iframe');
const wrapper = document.querySelector('.forum__wrapper');
for (let i = 0; i < 4; i++) {
    navLinksAll[i].onclick = function () {
        hamburgerButton.classList.remove('hamburger_active')
        navLinks.classList.remove('nav__links_active');
    }
}
h1.onclick = function () {
    h1.classList.toggle('h1_active');
}
hamburgerButton.onclick = function () {
    hamburgerButton.classList.toggle('hamburger_active');
    navLinks.classList.toggle('nav__links_active');
}

iframe.onload = function () {//когда в айфрейм что то загружаеться, запускаться функция и 
    wrapper.classList.add('wrapper_active');
    setTimeout(() => {
        document.forms.order.reset();
        wrapper.classList.remove('wrapper_active');
    }, 3000);
}