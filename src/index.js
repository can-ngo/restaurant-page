import "./styles.css";
import { Home } from "./home.js";
import { Breakfast } from "./breakfast.js";
import { About } from "./about.js";

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