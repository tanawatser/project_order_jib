import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from './Page/homepage'
import Orderbranch from './Page/orderbranch'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/orderbranch' component={Orderbranch} />



        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}
