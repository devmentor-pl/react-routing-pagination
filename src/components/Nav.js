// ./src/Nav
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const activeStyle = { border: '1px solid red' }
    const activeClass = 'active';
    return <ul>
        <li>
            <NavLink 
                exact 
                activeStyle={activeStyle} 
                to="/"
            >Home</NavLink>
        </li>
        <li>
            <NavLink 
                activeClassName={activeClass} 
                to="/category"
            >Category</NavLink>
        </li>
        <li>
            <NavLink 
                activeClassName={activeClass} 
                to="/contact"
            >Contact</NavLink>
        </li>
    </ul>
}

export default Nav;