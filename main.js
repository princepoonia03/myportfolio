// import Typed from 'typed.js';

var options = {
  strings: ['Prince Poonia', 'Full Stack Developer'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
};

var Typed = new Typed('.auto-type', options);

const Dark=document.querySelector("#DarkMode");

Dark.addEventListener("click",DarkM);

function DarkM(event){

  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
  document.getElementById('DarkMode').innerHTML='Light Mode';
  }
  else{
    document.getElementById('DarkMode').innerHTML='Dark Mode';
  }
}