import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'
import { css } from 'glamor'

import { requestGetPost, updatePost } from '../../actions/post'
import { selectCategory } from '../../actions/categories'
import PostForm from './PostForm'


class PostEdit extends PureComponent {

  componentDidMount() {
    const id = this.props.match.params.id || false
    this.props.requestGetPost(id)
  }

  componentWillReceiveProps(nextProps) {
    if( nextProps.match.params.id !== this.props.match.params.id ) {
      const id = nextProps.match.params.id || false
      this.props.requestGetPost(id)
    }
  }

  handlePostUpdate = ( event ) => {
    event.preventDefault()
    const serializedPost = FormSerialize(event.target, {hash: true})
    const post = {
      ...this.props.post,
      ...serializedPost
    }
    this.props.updatePost( post ).then( ({ p }) => {
      this.props.history.push(`/${post.category}/${post.id}`)
    })
  }

  render () {

    const { post } = this.props

    return (
      <div {...styles.container}>
        {post && post.title 
          && (
            <PostForm 
              formHeaderTitle="Edit Post"
              post={post}
              onFormSubmit={this.handlePostUpdate} />
        )}
      </div>
    )
  }
}

const styles = {
  container: css({
    margin: 15,
    padding: 20,
  })
}

const mapStateToProps  = ({ post }) => ({
  post: post.post 
    ? post.post 
    : post,
})

export default connect(mapStateToProps, { requestGetPost, updatePost, selectCategory })(PostEdit)