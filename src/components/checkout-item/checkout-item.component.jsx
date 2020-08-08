//Package imports
import React from 'react';
import { connect } from 'react-redux';

//Redux imports
import { addItemToCart, removeOneItemFromCart, removeAllItemFromCart } from '../../redux/cart/cart.actions';

//Style imports
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem : {imageUrl, quantity, name, price},removeOneItemFromCart ,removeAllItemFromCart, addItemToCart, cartItem}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='product'/>
        </div>
        <div className='item-block'>
            <span>{name}</span>
        </div>
        <div className='item-block'>
            <span className='quantity-control' onClick={() => removeOneItemFromCart(cartItem)}> &#12296; </span>
            <span>{quantity}</span> 
            <span className='quantity-control' onClick={() => addItemToCart(cartItem)} > &#12297; </span>
        </div>
        <div className='item-block'>
            <span>${price}</span>
        </div>
        <div className='item-block'>
            <span className='quantity-control' onClick={() => removeAllItemFromCart(cartItem)}> &#10005; </span>
        </div>
    </div>
)

const mapDispatchToProps = dispatch => ({
        addItemToCart: item => dispatch(addItemToCart(item)),
        removeOneItemFromCart: item => dispatch(removeOneItemFromCart(item)),
        removeAllItemFromCart: item => dispatch(removeAllItemFromCart(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);