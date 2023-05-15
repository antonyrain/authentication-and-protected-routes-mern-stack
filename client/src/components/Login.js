import "./Login.css";
import React from 'react';
import { Link } from 'react-router-dom';
//Hooks
import { useState } from "react";
//Services
import { login } from "../services/login";

const Login = () => {
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()


        const credentials = {
          username: username,
          password: password
        }
        login(credentials).then(returnedData => {
          const token = returnedData
          localStorage.setItem("token", token);
        })
        console.log('logging in with', username, password)
        setTimeout(()=>{window.location.reload(false)}, 500);
    }
    
    const handleLogout = (event) => {
        event.preventDefault()
        localStorage.removeItem("token");
        setTimeout(()=>{window.location.reload(false)}, 500);
    }
    
    return (
        <div className="login-form">
            <h1>Log in</h1>
            <h3>to see the page</h3>
            <form onSubmit={handleLogin}>
                <div className="username-field"><input
                    id="name"
                    placeholder="Username"
                    type="text"
                    value={username}
                    name="Username"
                    onChange={({ target }) => setUsername(target.value)}
                    required
                    />
                </div>
                <div className="password-field"><input
                    id="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    name="Password"
                    onChange={({ target }) => setPassword(target.value)}
                    required
                    />
                </div>
                <div className="buttons-container">
                    <button type="submit" id="login">Login</button>
                    <button onClick={handleLogout} id="logout">Logout</button>
                </div>
            </form>
            <div className="singup-link"><Link to={"/singup"}>Sing up here</Link></div>
        </div>
    )
}

export default Login