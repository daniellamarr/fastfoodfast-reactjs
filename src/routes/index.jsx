import 'babel-polyfill';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Profile from './Profile.jsx';
import SingleMenu from './SingleMenu.jsx';
import Checkout from './Checkout.jsx';

const Container = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/menu/:id" component={SingleMenu} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  </div>
);

export default Container;
