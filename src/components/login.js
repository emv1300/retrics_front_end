import React, { useState } from 'react';
import tradeify_logo from '../assets/tradeify_logo.png';
import { useHistory } from 'react-router';
import '../css/login.css'

function LoginForm() {

    const [details, setDetails] = useState({email:"", password:""});
    const [error, setError] = useState("");
    const history = useHistory();

    const submitHandler = e => {
        e.preventDefault();
        
        Login(details);
    }

    let users = [];
  
    fetch("http://localhost:3000/users")
    .then(response => response.json()).then(data => {
        data.forEach(element => {
            let x = {
                email: element.email,
                password: element.password,
                accountBalance: element.accountBalance,
                diamondsOwned: element.diamond,
                emeraldsOwned: element.emerald,
                rubiesOwned: element.ruby
            }
            users.push(x);
        });
    }).then(console.log(users));

    let gems = [];
    
    fetch("http://localhost:3000/jewels")
    .then(response => response.json()).then(data => {
        data.forEach(element => {
            let x = {
                id: element.id,
                name: element.name,
                value: element.value
            }
            gems.push(x);
        });
    }).then(console.log(gems))

    const Login = async (details)  => {
        
        
        let currentUser = users.find(element => element.email.toLowerCase() === details.email.toLowerCase());
        console.log(currentUser)
        
        
            try{
                if(currentUser.password === details.password) {
                
                    sessionStorage.setItem('user_email', details.email);
                    localStorage.setItem('user_balance', currentUser.accountBalance);
                    localStorage.setItem('diamondsOwned', currentUser.diamondsOwned);
                    localStorage.setItem('emeraldsOwned', currentUser.emeraldsOwned);
                    localStorage.setItem('rubiesOwned', currentUser.rubiesOwned);
            
                    
                    let indGem = gems.find(element => element.name === 'diamond');
                    localStorage.setItem('diamond', indGem.value);
                    localStorage.setItem('originalDprice', indGem.value);

                    indGem = gems.find(element => element.name === 'emerald');
                    localStorage.setItem('emerald', indGem.value);
                    localStorage.setItem('originalEprice', indGem.value);

                    indGem = gems.find(element => element.name === 'ruby');
                    localStorage.setItem('ruby', indGem.value);
                    localStorage.setItem('originalRprice', indGem.value);

                    history.push('/trade');
                    window.location.reload();

                }else{
                console.log("details don't match!");
                setError("details don't match!");
                }
            } catch(e){
                console.log("details don't match!");
                setError("details don't match!");
            }
        
      }


    return (
        <div className = "backgroundColor">
        <form title = "loginForm" onSubmit = {submitHandler} className = "box">
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

export default LoginForm;