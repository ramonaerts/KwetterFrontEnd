import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import routePaths from "../services/route-paths"
import Login from "../pages/login"

function Routes() {
    return (
        <Router>
            <Route exact path={ routePaths.Login} component={Login}/>
        </Router>
    )
}

export default Routes;