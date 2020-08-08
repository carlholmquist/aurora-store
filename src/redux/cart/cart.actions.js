import { cartActionTypes } from './cart.types'

export const toggleCartHidden = bool => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
    payload: bool
})

export const addItemToCart = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const removeOneItemFromCart = item => ({
    type: cartActionTypes.REMOVE_ONE_ITEM,
    payload: item
}) 

export const removeAllItemFromCart = item => ({
    type: cartActionTypes.REMOVE_ALL_ITEMS,
    payload: item
})