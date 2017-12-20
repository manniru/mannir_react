import React, { Component } from "react";

import { Switch, Route, Redirect } from 'react-router-dom'

import Home from "./Home";
import Stuff from "./Stuff";

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/form" component={Home} />
          <Route path="/form1" component={Home} />
          <Route path="*" component={Stuff} />
        </Switch>

      </div>
    );
  }
}

export default Main;
