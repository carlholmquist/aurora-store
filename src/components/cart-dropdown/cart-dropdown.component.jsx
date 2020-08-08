import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, hidden, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} {...cartItem}/>
            )) : <span className='empty-cart'> Cart is empty </span>}
        </div>

        <CustomButton onClick={() => history.push('/checkout')}> CheckOut </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
    hidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));