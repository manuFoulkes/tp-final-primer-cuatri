import { Header } from "./js/Header.js";
import { Router } from "./js/Router.js";
 
document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector("#root");

    root.innerHTML = null;

    root.appendChild(Header());

    const contentContainer = document.createElement("div");
    contentContainer.setAttribute("id", "content-container");

    root.appendChild(contentContainer);

    Router(contentContainer);
});