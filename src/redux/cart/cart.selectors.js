import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart],cart => cart.cartItems);

export const selectCartItemsCount = createSelector(
    [selectCartItems], cartItems =>
            cartItems.reduce(
                (acc,current) => 
                    acc + current.quantity, 
                    0
            )
)

export const selectHidden = createSelector([selectCart], cart => cart.hidden);

export const selectTotalPrice = createSelector(
    [selectCartItems], cartItems =>
        cartItems.reduce((acc,curr) => acc + (curr.price*curr.quantity), 0)
)