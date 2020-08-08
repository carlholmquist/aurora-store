//Package imports
import React from 'react';

//Style imports
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`${isGoogleSignIn?'google':''} ${inverted?'inverted':''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;