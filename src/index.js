import './style.css';

import {homeFunction} from "./home";

const home = document.getElementById('home');

const menu = document.getElementById('menu');

const about = document.getElementById('about')

home.addEventListener('click', () => {homeFunction()});


menu.addEventListener('click', () => alert("menu is happening"));

about.addEventListener('click', () => alert("about is happening"));

console.log("test");

