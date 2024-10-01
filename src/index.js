import style from "./style.css";
import about from "./about.js";
import menu from "./menu.js";
import home from "./home.js";

const homeTab = document.querySelector("nav > div button:nth-child(1)");
const menuTab = document.querySelector("nav > div button:nth-child(2)");
const aboutTab = document.querySelector("nav > div button:nth-child(3)");
const content = document.querySelector("#content");

addEventListener("DOMContentLoaded", () => {
    home();
})

homeTab.addEventListener("click", () => {
    content.innerHTML = "";
    home();
})

menuTab.addEventListener("click", () => {
    content.innerHTML = "";
    menu();
})

aboutTab.addEventListener("click", () => {
    content.innerHTML = "";
    about();
})
