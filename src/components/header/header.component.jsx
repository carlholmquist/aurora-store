import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';


class Header extends React.Component {
    
    render() {
        const { currentUser , hidden } = this.props;
        return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                { currentUser ? <div className='option' >Signed in as {currentUser.displayName}</div>  : null
                }
                
                <Link className='option' to='/shop'> SHOP </Link>
                <Link className='option' to='/contact'> CONTACT</Link>
                { currentUser ? 
                    <div className='option' onClick={ () => auth.signOut()}>SIGN OUT</div> 
                    :
                    <Link className='option' to='/signin'> SIGN IN</Link>
                }
            <CartIcon className='option'/>
            </div>
            {(hidden) ? null : <CartDropdown/>}
        </div>
        )
    }
}

const mapStateToProps = ({ user, cart }) => ({
    currentUser: user.currentUser,
    hidden: cart.hidden
})


export default connect(mapStateToProps)(Header);