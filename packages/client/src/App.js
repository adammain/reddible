import React, { PureComponent } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { css } from 'glamor'

import Header from './components/header/Header'
import PostThread from './components/post/PostThread'
import PostAdd from './components/post/PostAdd'
import PostEdit from './components/post/PostEdit'
import PostDetail from './components/post/PostDetail'

css.global('html, body', {
  margin: 0,
  padding: 0,
  backgroundColor: '#eeeeee',
  height: '100%',
  width: '100%',
})


class App extends PureComponent {
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
          <Route path="/:category/:id" component={PostDetail} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
