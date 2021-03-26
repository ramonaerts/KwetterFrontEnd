import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import routePaths from "../services/route-paths"
import Login from "../pages/login"
import Timeline from "../pages/timeline"

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path={ routePaths.Login} component={Login}/>
                <Route exact path={ routePaths.Timeline} component={Timeline}/>
            </Switch>
        </Router>
    )
}

export default Routes;