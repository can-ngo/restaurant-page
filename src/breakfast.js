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
import bunxaoImg from "./public/bunxao.jpg";

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

    static getDryFoods = () => {
        return this.foods.filter( food => food.type === 'dry');
    }

    static getWetFoods = () => {
        return this.foods.filter( food => food.type === 'wet');
    }

}

Breakfast.addFood("Cơm Tấm", 35000, "dry", comtamImg);
Breakfast.addFood("Phở", 50000, "wet", phoImg);
Breakfast.addFood("Hủ Tiếu", 40000, "wet", hutieuImg);
Breakfast.addFood("Bánh Mỳ", 20000, "dry", banhmyImg);
Breakfast.addFood("Bún Bò Huế", 50000, "wet", bunbohueImg);
Breakfast.addFood("Xôi Gà", 20000, "dry", xoigaImg);
Breakfast.addFood("Bánh Canh Cua", 45000, "wet", banhcanhcuaImg);
Breakfast.addFood("Súp Cua", 20000, "wet", supcuaImg);
Breakfast.addFood("Mỳ Ý", 25000, "dry", myyImg);
Breakfast.addFood("Nui", 30000, "wet", nuiImg);
Breakfast.addFood("Bún Xào", 15000, "dry", bunxaoImg);


export { Breakfast }