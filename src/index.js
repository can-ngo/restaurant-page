import "./styles.css";
import { Home } from "./home.js";
import { Breakfast } from "./breakfast.js";
import { About } from "./about.js";
import { displayFoods } from "./displayFoods.js"
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

    const headline = document.createElement('h1');
    headline.setAttribute('id','headline');
    headline.textContent = "Levering your taste!";
    content.appendChild(headline)

    addFilter();
    
    displayFoods(Breakfast.foods);

    filter.addEventListener("change", () => {
        console.log(`${filter.value} is selected`)
        if (filter.value === "wet") {
            removeCardDiv();
            displayFoods(Breakfast.getWetFoods());
        }
        
        if (filter.value === "dry") {
            removeCardDiv();
            displayFoods(Breakfast.getDryFoods());
        }
        
        if (filter.value === "all") {
            removeCardDiv();
            displayFoods(Breakfast.foods);
        }
    })
    
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

function removeCardDiv() {
    const cards = document.querySelectorAll('.card');
    cards.forEach( card => {
        content.removeChild(card);
    })
}