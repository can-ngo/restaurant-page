import "./styles.css";
import { Home } from "./home.js";
import { Breakfast } from "./breakfast.js";
import { About } from "./about.js";
import { addFilter } from "./addFilter.js";

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');

Home.display();

homeBtn.addEventListener('click', () => {
    clearDisplay();
    Home.display();
})

menuBtn.addEventListener('click', () => {
    clearDisplay();
    addHeadline();
    addFilter();
    filter.onchange = function () {
        //Filter food types
        console.log(`${filter.value} is selected`)
    }
    Breakfast.displayFoods();
})

aboutBtn.addEventListener('click', () => {
    clearDisplay();
    About.display();
})

function clearDisplay() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    content.style.backgroundImage = '';
}

function addHeadline () {
    const headline = document.createElement('h1');
    headline.setAttribute('id','headline');
    headline.textContent = "Levering your taste!";
    content.appendChild(headline)
}



