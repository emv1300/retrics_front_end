import React, { useState, useContext  } from 'react';
import LoginForm from './components/login';
import DashBoard from './components/mainPage';
import { UserContext } from './components/authContext';

function App() {

  const {currentLoggedInUser} = useContext(UserContext);

  const LogoutUser = () => {
    console.log("logged out");
  }

  return (
    <UserContext.Provider value = {{userC, setUserC}}>
      <div className="App">
        {
          (currentLoggedInUser !== "") ? (
            
            <div className = "dashboard">
              <DashBoard Logout = {LogoutUser}/>
            </div>
          ) : (
            <div className = "Background">
              <LoginForm />
            </div>
          )
        }
      </div>
    </UserContext.Provider>
  );
}

export default App;
