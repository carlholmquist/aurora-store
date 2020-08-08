//Package imports
import React from 'react';
import { connect } from 'react-redux';

//Component imports
import CustomButton from '../custom-button/custom-button.component';

//Redux imports
import { addItemToCart } from '../../redux/cart/cart.actions';

//Style imports
import './collection-item.styles.scss';

const CollectionItem = ({item, addItemToCart}) => {
    
    const { name, price, imageUrl} = item;

    return(
    <div className='collection-item'>
        <div 
            className='image'
            style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
        <CustomButton inverted onClick={() => addItemToCart(item)}>Add to cart</CustomButton>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);