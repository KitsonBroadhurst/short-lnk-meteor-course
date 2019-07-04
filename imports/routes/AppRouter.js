import Meteor from 'meteor/meteor';
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

export const history = createBrowserHistory()

export const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/signup" component={Signup} />
      <PrivateRoute path="/links" component={Link} />
      <PublicRoute path="/" exact component={Login} />
      <PublicRoute component={NotFound} />
    </Switch>
  </Router>
);
