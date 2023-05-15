import "./LogoutButton.css";
import React from 'react';

const LogoutButton = () => {
    
    const handleLogout = (event) => {
        event.preventDefault()
        localStorage.removeItem("token");
        setTimeout(()=>{window.location.reload(false)}, 500);
    }
    
    return (
        <button onClick={handleLogout} id="logout">Logout</button>
    )
}

export default LogoutButton