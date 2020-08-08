import React from 'react';
//route-management
import { Link } from 'react-router-dom';
//State-management imports
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectHidden } from '../../redux/cart/cart.selectors';
//Firebase import
import { auth } from '../../firebase/firebase.utils';
//Component imports
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
//style imports
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})


export default connect(mapStateToProps)(Header);