import "./Singup.css"
import React from 'react';
//Hooks
import { useState } from "react";
//Services
import { singup } from "../services/singup";

const Singup = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const [showLabel, setShowLabel] = React.useState(false)

    const handleSingUp = (event) => {
        event.preventDefault()
        const creds = {
          username: user,
          email: email,
          password: pass
        }
        singup(creds)
        setShowLabel(true)
      }
    
    return (
        <div className="singup-form">
            <h1>Singup</h1>
            <h3>and get all features</h3>
            <form onSubmit={handleSingUp}>
                <div className="username-field"><input
                    id="name"
                    placeholder="Username"
                    type="text"
                    value={user}
                    name="User"
                    onChange={({ target }) => setUser(target.value)}
                    required
                    />
                </div>
                <div className="email-field"><input
                    id="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    name="User"
                    onChange={({ target }) => setEmail(target.value)}
                    required
                    />
                </div>
                <div className="password-field"><input
                    id="password"
                    placeholder="Password"
                    type="password"
                    value={pass}
                    name="Pass"
                    onChange={({ target }) => setPass(target.value)}
                    required
                    />
                </div>
                <div className="singup-button-container">
                    <button type="submit" id="singup">Singup</button>
                    <div>{ showLabel ? <div className="ok">OK!</div> : null }</div>
                </div>
            </form>
        </div>
    )
}

export default Singup