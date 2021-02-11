import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { AppContext } from "../store/AppContext";

import { PublicRoute } from "./publicRouter/PublicRouter";
import { AuthRouter } from "./publicRouter/AuthRouter";

import { PrivateRoute } from "./privateRouter/PrivateRouter";
import { DashboardRouter } from "./privateRouter/DashboardRouter";
import { startChecking } from "../actions/authActions";

export const AppRouter = () => {
  const { state, dispatch } = useContext(AppContext);
  const { uid } = state.auth;

  useEffect(() => {
    console.log("validando si hay data...");
    dispatch(startChecking())
    console.log("hay data (uid)?:", state.auth);
    
  }, []);

  return (
    <Router>
      <>
        <Switch>
          <PublicRoute
            path="/login"
            component={AuthRouter}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            path="/"
            component={DashboardRouter}
            isAuthenticated={!!uid}
          />
        </Switch>
      </>
    </Router>
  );
};
