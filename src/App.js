import React, { useState} from 'react'
import LoginForm from './components/login';
import DashBoard from './components/mainPage';



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
  

  const Login =  async (details)  => {
    console.log(details);
    try{
      let currentUser = users.find(element => element.email.toLowerCase() === details.email.toLowerCase());
      if(currentUser.password === details.password) {
        userFound = true;
        setUser({
          email: details.email
        });
        localStorage.setItem('user_email', details.email)
        console.log(userFound);
        //await userLoggedIn();
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
          (user.email !== "") ? (
            <div className = "dashboard">
              <DashBoard Logout = {LogoutUser}/>
            </div>
          ) : (
            <LoginForm Login = {Login} error = {error}/>
          )
        }
      </div>
  );
}

export default App;
