import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({imageUrl, id, name, quantity}) => (
    <div className='cart-item'>
        <div 
            className='image'
            style={{backgroundImage: `url(${imageUrl})`}}
        />
        <span className='title'> { name }</span>
        <span className='counter'> {quantity} </span>

    </div>
)

export default CartItem;