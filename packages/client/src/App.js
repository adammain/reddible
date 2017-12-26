import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Header from './components/Header'
import PostThread from './components/Post/PostThread'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/:category" component={Header} />
        </Switch>
        <Switch>
          <Route exact path="/" component={PostThread} />
          <Route exact path="/:category" component={PostThread} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
