const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.mobile');

menu.addEventListener('click', menuToggle);

function menuToggle() {
  if(nav.classList == 'mobile') {
    nav.classList.add('show');
  } else {
    nav.classList.remove('show');
  }
}

function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
window.addEventListener("scroll", reveal);