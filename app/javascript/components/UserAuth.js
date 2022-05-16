import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header'
import SignInForm from './SignInForm';
import LoginForm from './LoginForm';
import Body from './Body'

function UserAuth() {
    const [user, setUser] = useState({})
    const [form, setForm] = useState("")
    const [userid, error] = useState("")

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            fetch(`http://localhost:3000/auto_login`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    setUser(data)
                    error(data.errors)
                    console.log("error user ",data.errors)
                })
        }
    }, [])

    const handleLogin = (user) => {
        setUser(user)
    }

    const handleFormSwitch = (input) => {
        setForm(input)
    }

    const handleAuthClick = () => {
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/user_is_authed`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(resp => resp.json())
            .then(data => console.log(data))
    }
    
    console.log("user is sign in ?",user)
    if (user && user.id) {
        // debugger
        console.log("user is sign in ?", user)
        return <Body />
    }
    

    const renderForm = () => {

        switch (form) {
            case "login":
                return <LoginForm handleLogin={handleLogin} />
                break;
            default:
                return <SignInForm handleLogin={handleLogin} />
        }
    }
    return (
        <div className="UserAuth">
            {userid &&
            <Header handleFormSwitch={handleFormSwitch} />}
            {
                userid &&
                renderForm()
            }
            {/* <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button> */}
        </div>
    );
}

export default UserAuth;