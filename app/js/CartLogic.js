let cartItems = [];

export const addToCart = (product) => {
    //console.log("addToCart()")
    const existingProduct = cartItems.find(item => item.id === product.id);

    if(existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cartItems.push({ ...product, quantity: 1});
    }
    //console.log(cartItems);

    document.dispatchEvent(new CustomEvent("cartUpdated", { detail: cartItems }));
}

export const removeItem = (productId) => {
    cartItems = cartItems.filter(item => item.id !== parseInt(productId));
    document.dispatchEvent(new CustomEvent("cartUpdated"));
}

export const cleanCart = () => {
    cartItems = [];
}

export const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

export const getCart = () => cartItems;