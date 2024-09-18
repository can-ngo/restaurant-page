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
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        this.content.appendChild(card);
    }

}

Breakfast.addFood("Com tam", 30000, "Kho", "./src/public/comtam.jpg");
Breakfast.addFood("Pho", 60000, "Nuoc", "./src/public/comtam.jpg");
Breakfast.addFood("Hu tieu", 55000, "Nuoc", "./src/public/comtam.jpg");

export { Breakfast }