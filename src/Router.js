import React, {useContext} from "react";
import LoginForm from "./components/login";
import TopBar from "./components/topBar";
import AuthenticationContext from "./components/contextUser";
import GemCards from "./components/gemCards";
import Charts from "./components/charts";
import SideBar from "./components/sideBar";
import "./css/sidebar.css";


import {BrowserRouter, Switch, Route} from "react-router-dom";

function RouterF() {

    const {userLoggedIn} = useContext(AuthenticationContext);

    return(
        <BrowserRouter>
            <Switch>
                <div>
                {
                    (userLoggedIn === "") ? (
                    
                    
                    <div className = "Background">
                        <Route exact path = "/" component = {LoginForm}/>
                      
                    </div>
                    ) : (
                        <div className = "dashboard">
                            <TopBar />
                            
                            <div className = "lineUpElements">
                                <SideBar />
                                <Route exact path = "/trade" component = {GemCards}/>
                                <Route exact path = "/statistics" component = {Charts}/>
                            
                            </div>
                        </div>
                    )
                }
                </div>
            </Switch>
        </BrowserRouter>
    )
}
export default RouterF;
            
            
            
            
/*  */