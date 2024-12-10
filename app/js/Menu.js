export const Menu = () => {
    const menu = document.createElement("nav");

    menu.classList.add("menu");
    menu.innerHTML = `
        <a href="#/">Home</>
        <a href="#products/">Productos</>
        <a href="#cart/">Carrito</>
    `;

    return menu;
}