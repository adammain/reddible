import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'
import uuid from 'uuid'

import { fetchPost } from '../../actions/post'
import { addNewComment } from '../../actions/comments'
import { fromNow, dateTimeFormat } from '../../utils/helpers'
import PostEditor from './PostEditor'
import PostComments from './components/PostComments'

class PostDetail extends Component {

  componentDidMount() {
    const id = this.props.match.params.id || false
    this.props.fetchPost(id)
  }

  componentWillReceiveProps(nextProps) {
    if( nextProps.match.params.id !== this.props.match.params.id ) {
      const id = this.props.match.params.id || false
      this.props.fetchPost(id)
    }
  }

  handleNewComment = ( event ) => {
    event.preventDefault()

    const postId = this.props.post.id
    const serializedComment = FormSerialize(event.target, {hash: true})
    const commentId = uuid()
    const comment = {
      ...serializedComment,
      id: commentId,
      parentId: postId
    }
    this.props.addNewComment(comment)
  }

  render () {

    const { post, comments, history } = this.props
    const postComments = comments[post.id] || []

    if (post && post.title) {
      return (
        <article>
            <div>
              <div>
                <h6>{post.author}</h6>
                <time dateTime={ dateTimeFormat(post.timestamp)}>
                  {fromNow(post.timestamp)}
                </time>
              </div>

              <h4>{post.title}</h4>
              <div>{post.body}</div>
            </div>

            <div>
              <PostEditor post={post} history={history} />
            </div>

            {postComments && (
              <PostComments 
                comments={postComments}
                onNewComment={this.handleNewComment}
              />
            )}
        </article>
      )
    } else {
      return (
        <article>
          <div>
            <div>
              This post no longer exists.
            </div>
          </div>
        </article>
      )
    }
  }
}

const mapStateToProps  = ({ post, comments }) => ({
  post: post.post ? post.post : post,
  comments
})

export default connect(mapStateToProps, { fetchPost, addNewComment })(PostDetail)