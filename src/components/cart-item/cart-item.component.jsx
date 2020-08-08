//Package imports
import React from 'react';

//Style imports
import './cart-item.styles.scss';

const CartItem = ({imageUrl, id, name, quantity, price, isCheckoutpage}) => (
    <div className='cart-item'>
        <div 
            className='image'
            style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className='text-container'>
            <span className='title'> { name }</span>
            <span className='counter'> {quantity} x {price}</span>
        </div>

    </div>
)

export default CartItem;