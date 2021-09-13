import React, { useState, useContext  } from 'react';
import LoginForm from './components/login';
import DashBoard from './components/mainPage';
import { UserContext } from './components/authContext';
import AuthenticationContext,{ AuthenticationContextProvider } from './components/contextUser';

function App() {

  const {currentLoggedInUser} = useContext(AuthenticationContext);

  const LogoutUser = () => {
    console.log("logged out");
  }

  return (
    <AuthenticationContextProvider>
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
    </AuthenticationContextProvider>
  );
}

export default App;
