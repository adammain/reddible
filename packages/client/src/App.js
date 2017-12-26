import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Header from './components/Header/Header'
import PostThread from './components/Post/PostThread'
import PostAdd from './components/Post/PostAdd'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/:category" component={Header} />
        </Switch>
        <Switch>
          <Route exact path="/" component={PostThread} />
          <Route exact path="/new" component={PostAdd} />
          <Route exact path="/:category" component={PostThread} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
