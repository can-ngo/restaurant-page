import "./styles.css";
import { Breakfast } from "./breakfast";

const content = document.querySelector('#content')

const headline = document.createElement('h1');
headline.setAttribute('id','headline');
headline.textContent = "The 40 Restaurant - Levering your taste!";
content.appendChild(headline)

console.table(Breakfast.foods)
Breakfast.displayFoods();