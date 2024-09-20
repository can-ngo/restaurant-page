import "./styles.css";
import { Home } from "./home.js";
import { Breakfast } from "./breakfast.js";
import { About } from "./about.js";

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');

Home.display();

homeBtn.addEventListener('click', () => {
    Breakfast.clearDisplay();
    About.clearDisplay();
    Home.display();
})

menuBtn.addEventListener('click', () => {
    Home.clearDisplay();
    About.clearDisplay();
    Breakfast.displayFoods();
})

aboutBtn.addEventListener('click', () => {
    Home.clearDisplay();
    Breakfast.clearDisplay();
    About.display();
})