import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './logOut'

const Navbar = props => {
    console.log("this is navbar", props)  
    return (
        <div>
            <button className="home"><NavLink to='/'>Home</NavLink></button>
            <button className="shop"><NavLink to='/items'>Shop</NavLink></button>

            { props.user.loggedIn ?
                <Logout handleLogoutClick={props.handleLogoutClick} /> :
                <>
                    <button className="login"><NavLink to='/login'> Login</NavLink></button>
                    <button className="signup"><NavLink to='/signup'> Signup</NavLink></button>
                </>
            }
            <button className="cart"><NavLink to='/cart'>Cart</NavLink></button>
            <button className="orders"><NavLink to='/orders'> Order</NavLink></button>

        </div>
    )
}

export default Navbar;