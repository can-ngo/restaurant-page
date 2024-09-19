import backgroundUrl from "./public/background.svg";

class Home {

    content = document.querySelector("#content");

    static display () {
        console.log(content);
        content.innerHTML += `
        <img src="${backgroundUrl}" alt="Background image"
            style="height: 100%;"
        >
        `
    }
}

export { Home }