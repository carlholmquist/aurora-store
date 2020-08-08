//Package imports
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

//Component imports
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

//Redux imports
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

//Style imports
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, hidden, history, dispatch }) => {
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} {...cartItem}/>
            )) : <span className='empty-cart'> Cart is empty </span>}
        </div>

        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}> CheckOut </CustomButton>
    </div>
)}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));