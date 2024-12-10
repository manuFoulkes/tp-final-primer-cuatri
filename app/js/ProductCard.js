//import { addToCart } from "./CartLogic.js"

export const ProductCard = (product) => {
    const article = document.createElement("article");

    article.classList.add("product-card");

    article.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>$${product.price}</p>
        <button class="add-to-cart">Añadir al carrito</button>
    `;

    const button = article.querySelector(".add-to-cart")
    console.log(button)
    button.addEventListener("click", () => {
    //    addToCart(product);
        alert(`${product.name} se agregó al carrito`);
    })
    return article;
}