import React, { useState } from 'react';
import LoginForm from './components/login';
import DashBoard from './components/mainPage';

function App() {

  const [user, setUser] = useState({email: "", password: ""});
  const [error, setError] = useState("");
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
  
  

  const Login = (details)  => {
 
    try{
      let currentUser = users.find(element => element.email.toLowerCase() === details.email.toLowerCase());
      let indGem = gems.find(element => element.name === 'diamond');
      localStorage.setItem('diamond', indGem.value);
      indGem = gems.find(element => element.name === 'emerald');
      localStorage.setItem('emerald', indGem.value);
      indGem = gems.find(element => element.name === 'ruby');
      localStorage.setItem('ruby', indGem.value);
      console.log(currentUser)
      if(currentUser.password === details.password) {
      
        setUser({
          email: details.email
        });
        localStorage.setItem('user_email', details.email);
        localStorage.setItem('user_balance', currentUser.accountBalance);
        localStorage.setItem('diamondsOwned', currentUser.diamondsOwned);
        localStorage.setItem('emeraldsOwned', currentUser.emeraldsOwned);
        localStorage.setItem('rubiesOwned', currentUser.rubiesOwned);
      }else{
        console.log("details don't match!");
        setError("details don't match!");
      }
    }catch(e){
      console.log("details don't match!");
      setError("details don't match!");
    }  
  }
  
  const LogoutUser = () => {
    console.log("logged out");
    localStorage.clear()
    setUser({email:""})
  }

  

  return (
    
      <div className="App">
        {
          (user.email !== "") ? (
            
            <div className = "dashboard">
              <DashBoard Logout = {LogoutUser}/>
            </div>
          ) : (
            <div className = "Background">
              <LoginForm Login = {Login} error = {error}/>
            </div>
          )
        }
      </div>
    
      
  );
}

export default App;
