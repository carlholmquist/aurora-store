import { cartActionTypes } from './cart.types'

export const toggleCartHidden = bool => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
    payload: bool
})

export const addItemToCart = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItemFromCart = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
}) 