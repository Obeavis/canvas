import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "containers/Home";

const Routes = () => {
  return (
    <Router basename="/">
      <Switch>
      <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
