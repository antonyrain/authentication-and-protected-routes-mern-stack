import "./DropdownNavbar.css";
import React from 'react';
import { NavLink } from 'react-router-dom';

const DropdownNavbar = () => {
    return (
        <nav className="dropdown-navbar">
            <ul className="dropdown-navbar-links">
                <li><NavLink to={"/"} className='nav-link'>Home</NavLink></li>
                <li><NavLink to={"/content"} className='nav-link'>Download</NavLink></li>
                <li><NavLink to={"/about"} className='nav-link'>About</NavLink></li>
                <li><NavLink to={"/contact"} className='nav-link'>Contact</NavLink></li>
                <li><NavLink to={"/login"} className='nav-link'>Login</NavLink></li>
                <li><NavLink to={"/singup"} className='nav-link'>Singup</NavLink></li>
            </ul>
        </nav>

    )
}

export default DropdownNavbar