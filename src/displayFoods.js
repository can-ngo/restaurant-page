export function displayFoods(foods) {
        const h1 = document.querySelector('h1');
        h1.textContent = "Vietnamese  Breakfast Foods"
        
        // Food cards
        foods.forEach(food => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            content.appendChild(card);
            card.innerHTML = `
            <p><strong>${food.name}</strong></p>
            <img src="${food.picture}" alt="${food.name}">
            <p>Price: <strong>${food.price.toLocaleString()}</strong> VND</p>
            `
        })

        content.setAttribute('style',`display: grid; 
                                  grid-template-columns: repeat(auto-fit, 200px);
                                  grid-template-rows: min-content;
                                  grid-auto-rows: min-content;
                                  padding: 10px;        
                                `)
        
}