import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'
import uuid from 'uuid'
import { css } from 'glamor'

import { requestAddPost } from '../../actions/post'
import PostForm from './PostForm'

class PostAdd extends Component {

  handlePostSubmit = (e) => {
    e.preventDefault()
    
    const serializedPost = FormSerialize(e.target, {hash: true})
    const postId = uuid()
    const post = {
      ...serializedPost,
      id: postId
    }
    
    this.props.requestAddPost(post).then(({p}) => {
      this.props.history.push(`/${post.category}`)
    })
  }

  render () {
    return (
      <section {...styles.container}>
          <PostForm 
            formTitle='New Post'
            onFormSubmit={this.handlePostSubmit} 
          />
      </section>
    )
  }
}

const styles = {
  container: css({
    margin: 15,
    padding: 20,
  })
}

export default connect(null, { requestAddPost })(PostAdd)