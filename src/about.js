import countrysideImg from "./public/vietnamcountryside.jpg";
import canquyenImg from "./public/canquyen.jpg";
import comtamImg from "./public/comtam.jpg";

class About {
    
    content = document.querySelector('#content');
    
    static display () {
        const h1 = document.querySelector('h1');
        h1.textContent = "ABOUT"

        content.style.position = 'relative';
        content.style.minWidth = '100vw';

        content.innerHTML += `
            
            <img id="country-img" src="${countrysideImg}" alt="Countryside img" width="400px">
            
            <div id="about">
                <p style="font-size: 1.5em;"><strong>About Can Ngo Restaurant</strong></p>
                <br>        
                Founded by Mr. Can and his wife in the peaceful Vietnamese countryside, Can Ngo Restaurant has been serving authentic Vietnamese breakfast for over 10 years. Known for its signature dishes like <strong>Cơm Tấm (broken rice)</strong> and <strong>Phở</strong>, the restaurant quickly gained a loyal following. Thanks to its continued success, Can Ngo Restaurant has expanded to two major cities in Vietnam: Ho Chi Minh City and Hanoi, bringing its traditional flavors to a wider audience while staying true to its family roots.
            </div>
            <img id="canquyen-img" src="${canquyenImg}" alt="Can Quyen img" width="250px">
            <img id="comtam-img" src="${comtamImg}" alt="Com tam img" width="350px">
        `
    }

    static clearDisplay () {
        content.innerHTML = "";
    }
}

export { About }