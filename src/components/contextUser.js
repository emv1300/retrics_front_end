import React, { createContext, useEffect, useState} from "react";

const AuthenticationContext = createContext();
function AuthenticationContextProvider(props) {
  const [userLoggedIn, setUserLoggedIn] = useState("");
  let users = [];
  async function getUserState() {
    const token = localStorage.getItem('user_email')
    console.log("token" + token)
    if (token){
      const data = await fetch("http://localhost:3000/users")
        .then(response => response.json())
      data.forEach(element => {
        let x = {
          email: element.email
        }
        users.push(x);
      });
      const userLoggedIn = users.find(element => element.email.toLowerCase() === token.toLowerCase());
        
      setUserLoggedIn(userLoggedIn);
    }
  }
  useEffect( ()=>{
    getUserState();
  }, []);
  return <AuthenticationContext.Provider value = {{userLoggedIn, setUserLoggedIn}}>
    {props.children}
    </AuthenticationContext.Provider>
}
export default AuthenticationContext;
export {AuthenticationContextProvider};