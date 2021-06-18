import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import { getClaim } from "../services/jwt";
import routePaths from "../services/route-paths";

const ProtectedRoute = ({ component: Component, user, roles, ...rest }) => {
    const jwt = new Cookies()?.get("Jwt");
  
    return (
      <Route
        {...rest}
        render={(props) => {
          if (jwt !== undefined && roles.includes(getClaim("role"))) {
            return <Component {...rest} {...props} />;
          }
  
          return (
            <Redirect
              to={{
                pathname: routePaths.Login,
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }}
      />
    );
  };
  
  export default ProtectedRoute;