import React, { useState } from 'react'
import LoginForm from './components/login';



function App() {

  const [user, setUser] = useState({email: "", password: ""});
  const [error, setError] = useState("");

  let users = []
  fetch("http://localhost:3000/users")
  .then(response => response.json()).then(data => {
      data.forEach(element => {
          let x = {
              email: element.email,
              password: element.password
          }
          users.push(x);
      });
  }).then(console.log(users))

  let userFound = false;
  

  const Login = details => {
    console.log(details);
    try{
      let currentUser = users.find(element => element.email.toLowerCase() == details.email.toLowerCase());
      if(currentUser.password == details.password) {
        userFound = true;
        setUser({
          email: details.email
        });
        console.log(userFound);
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
    setUser({email:""})
  }

  return (
    <div className="App">
      {
        (user.email != "") ? (
          <div className = "welcome message">
            <h2>Welcome! </h2> 
            <button onClick = {LogoutUser}>Logout</button>
          </div>
        ) : (
          <LoginForm Login = {Login} error = {error}/>
        )
      }
    </div>
  );
}

export default App;
