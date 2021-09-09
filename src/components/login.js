import React, { useState } from 'react';
import tradeify_logo from '../assets/tradeify_logo.png';
import '../css/app.css';

function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({email:"", password:""});
    
    const submitHandler = e => {
        e.preventDefault();
        
        Login(details);
    }

    return (
        <div className = "backgroundColor">
        <form onSubmit = {submitHandler} className = "box">
            <div className = "formInner"> 
                <img className = "loginLogo" alt = "website logo" src = {tradeify_logo}  heigth = "120" width = "240"  />
                {/* Error */}
                {(error !== "") ? ( <div className = "error">{error}</div> ): ""}
                <div className = "formGroup">
                    <input 
                        type = "email" 
                        name = "email" 
                        id = "email" 
                        onChange = {e => setDetails({...details, email: e.target.value})} value = {details.email}
                        required    
                        placeholder = "Email"
                    />
                </div>
                <div className = "formGroup">
                    <input 
                        type = "password" 
                        name = "password" 
                        id = "password" onChange = {e => setDetails({...details, password: e.target.value})} value = {details.password}
                        required
                        placeholder = "Password"
                    />
                </div>
                <input type = "submit" value = "Login" className = "roundRectangle"/>
            </div>
        </form>
        </div>
    )
}
export default LoginForm