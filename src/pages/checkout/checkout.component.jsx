//Package imports
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Component imports
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

//Redux imports
import { selectCartItems, selectTotalPrice } from '../../redux/cart/cart.selectors';

//Style imports
import './checkout.styles.scss';

const CheckoutPage = ( { cartItems, totalPrice } ) => {
    
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
                {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
            <div className='total'> Total price is ${totalPrice}</div>
        </div>

    )
} 
  
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);