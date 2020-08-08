//Package imports
import React from 'react';

//Component imports
import CollectionItem from '../collection-item/collection-item.component';

//Style imports
import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => (
    <div className='preview-collection-item'>
        <h1 className='title' >{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item,ind) => ind < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                    ))
                
            }

        </div>
    </div>
)

export default CollectionPreview;