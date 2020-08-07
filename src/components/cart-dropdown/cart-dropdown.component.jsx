import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} {...cartItem}/>
            ))}
        </div>

        <CustomButton> CheckOut </CustomButton>
    </div>
)

const mapStateToProps = ({ cart }) => ({
    cartItems: cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);