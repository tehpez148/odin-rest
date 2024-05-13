import './style.css';


import {homeFunction} from "./home";
import {menuFunction} from "./menu";
import {aboutFunction} from "./about";

//function to empty the DOM before replacing it with new select elements
function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
};

const mainBox = document.getElementById('content');  
  
const home = document.getElementById('home');

const menu = document.getElementById('menu');

const about = document.getElementById('about')

home.addEventListener('click', () => {
    empty(mainBox);
    homeFunction();
});


menu.addEventListener('click', () => {
    empty(mainBox);
    menuFunction();
   
});

about.addEventListener('click', () => {
    empty(mainBox);
    aboutFunction();
});

console.log("test");

homeFunction();
