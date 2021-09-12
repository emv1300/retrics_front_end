import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from 'react';

function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/trade">
                    Trade
                </Route>
                <Route path = "/statistics">
                    Statistics
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;