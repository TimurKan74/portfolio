const hamburgerButton = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');
const h1 = document.querySelector('h1');
const navLinksAll = document.querySelectorAll('.nav__links a');
console.log(navLinksAll);
for (let i = 0; i < 4; i++) {
    navLinksAll[i].onclick = function () {
        hamburgerButton.classList.remove('hamburger_active')
        navLinks.classList.remove('nav__links_active');
    }
}
// const aboutLink = document.querySelector('.nav__links a:nth-child(1)');
// const skilsLink = document.querySelector('.nav__links a:nth-child(2)');
// skilsLink.onclick = function () {
//     hamburgerButton.classList.remove('hamburger_active')
//     navLinks.classList.remove('nav__links_active');
// }
// aboutLink.onclick = function () {
//     hamburgerButton.classList.remove('hamburger_active')
//     navLinks.classList.remove('nav__links_active');
// }
h1.onclick = function () {
    h1.classList.toggle('h1_active');
}
hamburgerButton.onclick = function () {
    hamburgerButton.classList.toggle('hamburger_active');
    navLinks.classList.toggle('nav__links_active');
}