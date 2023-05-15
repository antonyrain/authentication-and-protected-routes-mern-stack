import "./Navbar.css";
import React from 'react';
import { NavLink } from 'react-router-dom';
//Components
import DropdownNavbar from '../components/DropdownNavbar';
import LogoutButton from '../components/LogoutButton';

const Navbar = () => {
    const [showComponent, setShowComponent] = React.useState(false)
    const onClick = () => setShowComponent(!showComponent)

    const isToken = localStorage.getItem("token")
    const loginMessage = isToken !== null
    ? {display: "block"}
    : {display: "none"}

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                    <NavLink to={"/"}>
                        <div className='logo'>LOGO</div>
                    </NavLink>
                </div>
                <div className="navbar-container">
                    <ul className="navbar-links">
                        <li><NavLink to={"/"} className='nav-link'>Home</NavLink></li>
                        <li><NavLink to={"/content"} className='nav-link'>Download</NavLink></li>
                        <li><NavLink to={"/about"} className='nav-link'>About</NavLink></li>
                        <li><NavLink to={"/contact"} className='nav-link'>Contact</NavLink></li>
                        <li><NavLink to={"/login"} className='nav-link'>Login</NavLink></li>
                        <li><NavLink to={"/singup"} className='nav-link'>Singup</NavLink></li>
                    </ul>
                </div>
                <div style={loginMessage}><LogoutButton /></div>
                <div className='hamburger-menu' onClick={onClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>{ showComponent ? <DropdownNavbar /> : null }</div>

            </nav>
        </div>

    )
}

export default Navbar