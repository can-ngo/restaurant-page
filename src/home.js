import backgroundUrl from "./public/background.svg";

class Home {

    content = document.querySelector("#content");
    
    static display () {
        
        const h1 = document.querySelector('h1');
        h1.textContent = "CAN NGO RESTAURANT"

        content.style.backgroundImage = `url(${backgroundUrl})`;
        content.style.backgroundSize = "cover";
        content.style.backgroundRepeat = "no-repeat";
        content.style.backgroundPosition = "center";
        content.style.display = "flex";
        content.style.flexDirection = "column";
        content.style.alignItems = "center";
        content.style.justifyContent = "flex-start";
        
        content.innerHTML += `
        <h1 style="margin-top: 1em">Welcome to Can Ngo Restaurant</h1>
        <hr style="width: 40%;">
        <p><span style="font-size: 1.5em">Thu Duc City</span> - Opening hour: <span style="color: red">6:30</span> - <span style="color: red">21:00</span></p>
        <p><span style="font-size: 1.5em">Binh Duong Province</span> - Opening hour: <span style="color: red">7:00</span> - <span style="color: red">20:30</span></p>
        <hr style="width: 40%;">
        <h3>Hotline: <span style="color: red">1900 10--</span><h3>
        `
    }

    static clearDisplay () {
        content.innerHTML = "";
        content.style.backgroundImage = '';
    }
}

export { Home }