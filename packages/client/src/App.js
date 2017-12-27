import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { css } from 'glamor'

import Header from './components/header/Header'
import PostThread from './components/post/PostThread'
import PostAdd from './components/post/PostAdd'
import PostEdit from './components/post/PostEdit'

css.global('html, body', {
  margin: 0,
})


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
          <Route exact path="/edit/:id" component={PostEdit} />
          <Route exact path="/:category" component={PostThread} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
