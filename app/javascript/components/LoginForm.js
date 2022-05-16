import React, { useState } from 'react'

function LoginForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, seterror] = useState("")

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
            })
        })
            .then(resp => resp.json())
            .then(data => {
                localStorage.setItem("token", data.jwt)
                props.handleLogin(data.user)
                if (data.failure){
                    seterror(data.failure)
                    // alert(data.failure)
                }else{
                    alert(data.success)
                }
            })
        setUsername("")
        setPassword("")
    }
    // debugger
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }
    return (
        <center><div>
            <div style={formDivStyle}>
                <h1>Log In</h1>
                {/* <h2>{message}</h2> */}
                <form className="ui form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label>Username</label>
                        <input className="form-control" value={username} onChange={handleUsernameChange} type="text" placeholder="username" required/>
                        <span style={{ color: 'red' }}>{error}</span>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input className="form-control" value={password} onChange={handlePasswordChange} type="password" placeholder="password" required/>
                    </div>

                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        </div></center>
    )
}

export default LoginForm