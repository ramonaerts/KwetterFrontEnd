import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import routePaths from "../services/route-paths";
import ProtectedRoute from "../routes/protectedRoute";
import roles from "../services/roles";
import Login from "../pages/login";
import Timeline from "../pages/timeline";
import Profile from "../pages/profile";
//import Moderation from "../pages/moderation";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route roles={[roles.Admin, roles.Moderator, roles.User]} exact path={ routePaths.Login} component={Login}/>
                <ProtectedRoute roles={[roles.Admin, roles.Moderator, roles.User]} exact path={ routePaths.Timeline} component={Timeline}/>
                <ProtectedRoute roles={[roles.Admin, roles.Moderator, roles.User]} exact path={ routePaths.Profile} component={Profile}/>
                {/* <ProtectedRoute roles={[roles.Admin, roles.Moderator]} exact path={ routePaths.Moderation} component={Moderation}/> */}
            </Switch>
        </Router>
    )
}

export default Routes;