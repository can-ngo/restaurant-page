class About {
    
    content = document.querySelector('#content');
    
    static display () {
        const h1 = document.querySelector('h1');
        h1.textContent = "ABOUT"

        content.style.display = "flex";
        content.style.flexDirection = "column";
        content.style.alignItems = "center";
        content.style.justifyContent = "center";

        content.innerHTML += `
                <div id="about">
                    <p style="font-size: 1.5em;"><strong>About Can Ngo Restaurant</strong></p>
                    <br>        
                    Founded by Mr. Can and his wife in the peaceful Vietnamese countryside, Can Ngo Restaurant has been serving authentic Vietnamese breakfast for over 10 years. Known for its signature dishes like <strong>Cơm Tấm (broken rice)</strong> and <strong>Phở</strong>, the restaurant quickly gained a loyal following. Thanks to its continued success, Can Ngo Restaurant has expanded to two major cities in Vietnam: Ho Chi Minh City and Hanoi, bringing its traditional flavors to a wider audience while staying true to its family roots.
                </div>
                
            `  
    }
}

export { About }