import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'
import uuid from 'uuid'
import { css } from 'glamor'

import { addNewPost } from '../../actions/post'
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
    console.log("form submit value: ", post)
    this.props.addNewPost(post).then(({p}) => {
      this.props.history.push(`/${post.category}/${post.id}`)
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

export default connect(null, { addNewPost })(PostAdd)