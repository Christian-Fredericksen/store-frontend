import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout'

const Navbar = props => {  
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/items'>Shop</NavLink>

            { props.user.loggedIn ?
                <Logout handleLogoutClick={props.handleLogoutClick} /> :
                <>
                    <NavLink to='/login'> Login</NavLink>
                    <NavLink to='/signup'> Signup</NavLink>
                </>
            }
            <NavLink to='/cart'>Cart</NavLink>
        </div>
    )
}

export default Navbar;