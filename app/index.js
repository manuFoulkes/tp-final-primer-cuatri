import { Header } from "./js/Header.js";
import { Main } from "./js/Main.js";
import { Cart } from "./js/Cart.js";
 
document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector("#root");

    root.innerHTML = null;
    root.appendChild(Header());
    root.appendChild(Main());
    //root.appendChild(Cart());
});