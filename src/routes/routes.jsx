import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import routePaths from "../services/route-paths"
import Login from "../pages/login"
import Timeline from "../pages/timeline"

function Routes() {
    return (
        <Router>
            <Route exact path={ routePaths.Login} component={Login}/>
            <Route exact path={ routePaths.Timeline} component={Timeline}/>
        </Router>
    )
}

export default Routes;