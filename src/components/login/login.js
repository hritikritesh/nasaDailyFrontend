import React,{ useState } from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode"

const Login = ({setLoginUser}) => {

    const navigate = useNavigate();

    const [ user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        
    }
    
    const login = () => {
        axios.post("https://nasa-daily-backend.vercel.app/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate("/")
        })
    }   

    window.googleloginhandler = (response) => {
        var userObject = jwt_decode(response.credential)
        console.log(userObject)
        alert("Login successful")
        setLoginUser(userObject)
    }

    return(
        <div className="login">
            {/* {console.log(user)} */}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter Your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Your Password"></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>Register</div>
            <div id="g_id_onload"
                data-client_id="348863221417-b2m8b0ulmv0li62ufassmp1traiu2isv.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-callback="googleloginhandler"
                data-nonce=""
                data-auto_prompt="false">
            </div>

            <div class="g_id_signin"
                data-type="standard"
                data-shape="rectangular"
                data-theme="outline"
                data-text="signin_with"
                data-size="large"
                data-logo_alignment="left">
            </div>
        </div>
    )
}

export default Login