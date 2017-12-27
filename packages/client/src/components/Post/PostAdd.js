import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'
import uuid from 'uuid'
import { css } from 'glamor'

import { addNewPost } from '../../actions/post'
import PostForm from './PostForm'

class PostAdd extends Component {

  handlePostSubmit = ( event ) => {
    event.preventDefault()

    const serializedPost = FormSerialize(event.target, {hash: true})
    const postId = uuid()
    const post = {
      ...serializedPost,
      id: postId
    }
    this.props.addNewPost( post ).then( ({ p }) => {
      this.props.history.push(`/${post.category}/${post.id}`)
    })
  }

  render () {
    return (
      <section {...styles.container}>
          <PostForm 
            formHeaderTitle='New Post'
            onFormSubmit={this.handlePostSubmit} 
          />
      </section>
    )
  }
}

const styles = {
  container: css({
    maxWidth: '75%',
    margin: 15,
    padding: 20,
    backgroundColor: 'white',
    'box-shadow': '0 1px 4px 0 rgba(0,0,0,0.14)'
  })
}

export default connect(null, { addNewPost })(PostAdd)