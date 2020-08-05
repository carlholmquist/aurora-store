import { cartActionTypes } from './cart.types'

export const toggleCartHidden = bool => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
    payload: bool
})