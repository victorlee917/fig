import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "../Routes/Main";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main></Main>
        </Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </Router>
  );
};
