export const grouper = (cartItems, cartItemToAdd) => {
    const existing = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existing) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} :
            cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
    
}

export const remover = (cartItems, cartItemToRemove) => {
    if (cartItemToRemove.quantity > 1) {
        return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}: cartItem)
    } else {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id).map(cartItem => cartItem)
    }
    
}
