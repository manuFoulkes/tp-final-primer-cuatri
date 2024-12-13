import { getCart, getCartTotal, cleanCart, removeItem } from "./CartLogic.js";

export const Cart = () => {
    const cartSection = document.createElement("section");
    cartSection.classList.add("cart-section");
    
    const renderCart = () => {
        let cartItems = getCart();

        cartSection.innerHTML = `
            <h2>Carrito de compras</h2>
            ${
                cartItems.length === 0
                
                ? `<p>Carrito vacío</p>`

                : `
                    <ul>
                        ${cartItems.map(
                            (item) => `
                                <li>
                                    ${item.name} - $${item.price} - Cantidad: ${item.quantity}
                                    <button data-id=${item.id} class="remove">Eliminar</button>
                                </li>
                            `
                        ).join("")}
                    </ul>

                    <p>Total compra: $${getCartTotal()}</p>
                    <button class="finalize-btn" id="finalize-btn">Finalizar compra</button>
                `
            }
        `;
        
        const finalizeSaleBtn = cartSection.querySelector("#finalize-btn");
    
        if(finalizeSaleBtn) {
            finalizeSaleBtn.addEventListener("click", () => {
                cleanCart();
                renderCart();
                alert("Compra realizada con éxito!");
            });
        }
    }

    cartSection.addEventListener("click", (e) => {
        const clickedElement = e.target;
        if(clickedElement.classList.contains("remove")) {
            const productId = clickedElement.getAttribute("data-id");
            removeItem(productId);
            renderCart();
        }
    });

    document.addEventListener("cartUpdated", () => {
        renderCart();
    });
    
    renderCart();

    return cartSection;
}