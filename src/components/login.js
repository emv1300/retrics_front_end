import React, { useState } from 'react';
import tradeify_logo from '../assets/tradeify_logo.png';

function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({username:"", password:""});
    
    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit = {submitHandler} className = "trialBox">
            <div className = "formInner"> 
                <img className = "loginLogo"  src = {tradeify_logo}  heigth = "120" width = "240"  />
                {/* Error */}
                {(error != "") ? ( <div className = "error">{error}</div> ): ""}
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
    
    )
}
export default LoginForm