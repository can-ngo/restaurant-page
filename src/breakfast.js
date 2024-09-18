import comtamImg from "./public/comtam.jpg";
import phoImg from "./public/pho.jpg";
import hutieuImg from "./public/hutieu.jpg";
import banhmyImg from "./public/banhmy.jpg";

class Breakfast {
    static content = document.querySelector('#content');
    
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
        this.foods.forEach(food => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            this.content.appendChild(card);
            card.innerHTML = `
            <p><strong>${food.name}</strong></p>
            <img src="${food.picture}" alt="${food.name}">
            <p>Giá: <strong>${food.price.toLocaleString()}</strong> VNĐ</p>
            `
        })
    }

}

Breakfast.addFood("Cơm Tấm", 30000, "Khô", comtamImg);
Breakfast.addFood("Phở", 60000, "Nước", phoImg);
Breakfast.addFood("Hủ Tiếu", 55000, "Nước", hutieuImg);
Breakfast.addFood("Bánh Mỳ", 20000, "Khô", banhmyImg)

export { Breakfast }