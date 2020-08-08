import { cartActionTypes } from './cart.types'
import { grouper, removeOne, removeAll } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: grouper(state.cartItems,action.payload),
            }
        case cartActionTypes.REMOVE_ONE_ITEM:
            return {
                ...state,
                cartItems: removeOne(state.cartItems,action.payload)
            }
        case cartActionTypes.REMOVE_ALL_ITEMS:
            return {
                ...state,
                cartItems: removeAll(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;