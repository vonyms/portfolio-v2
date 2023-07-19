// open close nav
let toggleMenu = document.querySelector('.toggleMenu');
let navbar = document.querySelector('.navbar');
toggleMenu.onclick = function(){
    navbar.classList.toggle('navActive');
}
const link = document.querySelectorAll('.link');
function activeLink(){
link.forEach((item)=>
item.classList.remove('select'));
this.classList.add('select');
}
link.forEach((item)=>
item.addEventListener('click',activeLink));

// form contact event
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

  let menuToggle = document.querySelector('.menuToggle');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
}