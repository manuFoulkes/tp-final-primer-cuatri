import { ProductCard } from "./ProductCard.js";
import { products } from "./products.js";

export const Main = () => {
    const main = document.createElement("main");
    main.classList.add("main-content");

    products.forEach(product => {
        console.log(product);
        main.appendChild(ProductCard(product));
    });

    return main;
}