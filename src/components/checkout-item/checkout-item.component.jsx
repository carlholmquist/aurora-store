import React from 'react';

import { connect } from 'react-redux';

import { addItemToCart, removeItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem : {imageUrl, quantity, name, price},removeItemFromCart , addItemToCart, cartItem}) => (
    <div className='checkout-item'>
        <div className='item-block'>
            <div 
                className='image'
                style={{backgroundImage: `url(${imageUrl})`}}
            />
        </div>
        <div className='item-block'>
            <span>{name}</span>
        </div>
        <div className='item-block'>
            <span className='quantity-control' onClick={() => removeItemFromCart(cartItem)}> {`<`} </span>
            <span>{quantity}</span> 
            <span className='quantity-control' onClick={() => addItemToCart(cartItem)} > {`>`} </span>
        </div>
        <div className='item-block'>
            <span>${price}</span>
        </div>
        <div className='item-block'>
            <span > X </span>
        </div>
    </div>
)

const mapDispatchToProps = dispatch => ({
        addItemToCart: item => dispatch(addItemToCart(item)),
        removeItemFromCart: item => dispatch(removeItemFromCart(item))
})


export default connect(null,mapDispatchToProps)(CheckoutItem);