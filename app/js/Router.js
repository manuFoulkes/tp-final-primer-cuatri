import { Main } from "./Main.js";
import { Cart } from "./Cart.js";

export const Router = (contentContainer) => {

    const handleRoute = () => {
        const currentRoute = window.location.hash;

        contentContainer.innerHTML = "";

        if(currentRoute === "#/products/") {
            contentContainer.appendChild(Main());
        } else if(currentRoute === "#/cart/") {
            contentContainer.appendChild(Cart());
        } else {
            contentContainer.appendChild(Main());
        }
    }

    window.addEventListener("hashchange", handleRoute);

    handleRoute();
}