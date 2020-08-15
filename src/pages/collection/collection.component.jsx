import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Redux imports
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ match }) => {
    console.log(match.params.collectionId)
    return (
        <h1>LOL</h1>
)}

const mapStateToProps = (state,ownProps) => {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
}

export default connect(mapStateToProps)(CollectionPage);