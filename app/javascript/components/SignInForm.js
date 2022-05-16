import React, { useState } from 'react'

function SignInForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [lastname, setLastname] = useState("")
    const [address, setAddress] = useState("")

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const handleLastnameChange = (evt) => {
        setLastname(evt.target.value)
    }

    const handleAddressChange = (evt) => {
        setAddress(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                lastname,
                address
            })
        })
            .then(resp => resp.json())
            .then(data => {
                localStorage.setItem("token", data.jwt)
                props.handleLogin(data.user)
            })
        setUsername("")
        setPassword("")
        setLastname("")
        setAddress("")
    }
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }

    return (
        <center><div style={formDivStyle}>
            <h1>Sign Up</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input className="form-control" value={username} onChange={handleUsernameChange} type="text" placeholder="username" required/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input className="form-control" value={password} onChange={handlePasswordChange} type="password" placeholder="password" required />
                </div>
                <div className="field">
                    <label>lastname</label>
                    <input className="form-control" value={lastname} onChange={handleLastnameChange} type="text" placeholder="lastname" required />
                </div>
                <div className="field">
                    <label>Address</label>
                    <input className="form-control" value={address} onChange={handleAddressChange} type="text" placeholder="address" required />
                </div>

                <button className="ui button" type="submit">Submit</button>
            </form>
        </div></center>
    )
}

export default SignInForm