class ViewController {

    constructor() {
        this.appController = SingletonAppController.getInstance();
        this.elements = {};
    }

    clearScreen() {
        const mainElement = document.querySelector("main");
        while (mainElement.lastChild) {
            mainElement.removeChild(mainElement.lastChild);
        }
    }

    setContentHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
}




// window.addEventListener("load", event => {
//     for (const clearScreen of document.getElementsByClassName("js-clear-screen")) {
//         clearScreen.addEventListener("click", clearScreen);
//     }
// });

window.addEventListener("resize",  () => {
    let devInfo = document.getElementById("dev-info");
    devInfo.innerHTML = "window.innerHeight = " + window.innerHeight;
})