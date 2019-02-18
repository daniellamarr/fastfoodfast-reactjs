import 'babel-polyfill';
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Signup from "./Signup";

const Container = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default Container;
