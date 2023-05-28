//   Set Variable

const toggleBtn = document.querySelector('.toggle-btn');
const header = document.querySelector('.main-header');
const headerUl = document.querySelector('.main-header ul');
const overlay =document.querySelector('.overlay')


toggleBtn.addEventListener('click',showNav)

function showNav(){
  headerUl.classList.toggle('open');
  header.classList.toggle('open');
  toggleBtn.classList.toggle('open');
  overlay.classList.toggle('open');
}






















