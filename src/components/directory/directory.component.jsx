//Package imports
import React from 'react';
import { createStructuredSelector } from 'reselect';

//Component imports
import MenuItem from '../menu-item/menu-item.component'

//Redux imports
import { connect } from  'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

//Style imports
import './directory.styles.scss'

const Directory = ({ sections }) => {
  return (
      <div className='manu-item-directory'>
          {sections.map(({ id, ...otherSectionProps }) => (
              <MenuItem key={id} {...otherSectionProps}/>
          ))}
      </div>
  )  
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);