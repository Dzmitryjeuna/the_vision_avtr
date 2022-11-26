const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.header__top');

btn.addEventListener('click', ()=>{
   nav.classList.toggle('menu-open')
});