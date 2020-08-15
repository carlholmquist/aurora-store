//Package imports
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Component imports
import CollectionPreview from '../collection-preview/collection-preview.component';

//Redux imports
import { selectShopCollections } from '../../redux/shop/shop.selectors';

//Style imports
import './collections-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionOverview);