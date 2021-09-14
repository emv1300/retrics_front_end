import React from "react";
import RouterF from "./Router"
import { AuthenticationContextProvider } from "./components/contextUser";

function App() {

  

  return (
    <div>
      <AuthenticationContextProvider>
        <RouterF/>
      </AuthenticationContextProvider>
    </div>
  );
}

export default App;
