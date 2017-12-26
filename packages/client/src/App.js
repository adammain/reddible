import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/:category?" component={Header} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
