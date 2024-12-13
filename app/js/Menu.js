export const Menu = () => {
    const menu = document.createElement("nav");

    menu.classList.add("menu");
    menu.innerHTML = `
        <a href="#/products/">Productos</a>
        <a href="#/cart/">Carrito</a>
    `;

    return menu;
}