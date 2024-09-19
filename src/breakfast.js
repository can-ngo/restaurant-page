import comtamImg from "./public/comtam.jpg";
import phoImg from "./public/pho.jpg";
import hutieuImg from "./public/hutieu.jpg";
import banhmyImg from "./public/banhmy.jpg";
import bunbohueImg from "./public/bunbohue.jpg";
import xoigaImg from "./public/xoiga.jpg";
import banhcanhcuaImg from "./public/banhcanhcua.png";
import supcuaImg from "./public/supcua.jpeg";
import myyImg from "./public/myy.jpg";
import nuiImg from "./public/nui.jpg";


class Breakfast {
    
    content = document.querySelector('#content');
    
    static foods = [];
    
    static addFood = (name, price, type, picture) => {
        if (!name || !price || isNaN(price)) {
            alert('Invalid food name or price!')
            
        } else {
            const newFood = {
                name: name,
                price: price,
                type: type,
                picture: picture
            }
            this.foods.push(newFood);
            console.log(`Added ${name} to foods`)
        }
    }

    static removeFood = (foodName) => {
        if (!isNaN(foodName)) {
            const _foodName = this.foods[foodName].name;
            this.foods = this.foods.filter(food => this.foods.indexOf(food) !== foodName)   
            console.log(`Removed ${_foodName} from foods`)
            
        } else {
            this.foods = this.foods.filter( food => food.name !== foodName)
            console.log(`Removed ${foodName} from foods`)
        }
    }

    static displayFoods = () => {
        // Headline
        const headline = document.createElement('h1');
        headline.setAttribute('id','headline');
        headline.textContent = "Levering your taste!";
        content.appendChild(headline)

        // Food cards
        this.foods.forEach(food => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            content.appendChild(card);
            card.innerHTML = `
            <p><strong>${food.name}</strong></p>
            <img src="${food.picture}" alt="${food.name}">
            <p>Giá: <strong>${food.price.toLocaleString()}</strong> VNĐ</p>
            `
        })

        // Styling content
        content.setAttribute('style',`display: grid; 
                                      grid-template-columns: repeat(auto-fit, 200px);
                                      grid-template-rows: min-content;
                                      grid-auto-rows: min-content;        
                                    `)
    }

}

Breakfast.addFood("Cơm Tấm", 35000, "Khô", comtamImg);
Breakfast.addFood("Phở", 50000, "Nước", phoImg);
Breakfast.addFood("Hủ Tiếu", 40000, "Nước", hutieuImg);
Breakfast.addFood("Bánh Mỳ", 20000, "Khô", banhmyImg);
Breakfast.addFood("Bún Bò Huế", 50000, "Nước", bunbohueImg);
Breakfast.addFood("Xôi Gà", 20000, "Khô", xoigaImg);
Breakfast.addFood("Bánh Canh Cua", 45000, "Nước", banhcanhcuaImg);
Breakfast.addFood("Súp Cua", 20000, "Nước", supcuaImg);
Breakfast.addFood("Mỳ Ý", 25000, "Khô", myyImg);
Breakfast.addFood("Nui", 30000, "Khô", nuiImg);

export { Breakfast }