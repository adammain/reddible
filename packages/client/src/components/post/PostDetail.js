import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'
import uuid from 'uuid'
import { css } from 'glamor'

import { requestGetPost } from '../../actions/post'
import { addNewComment } from '../../actions/comments'
import { fromNow, dateTimeFormat } from '../../utils/helpers'
import PostEditor from './PostEditor'
import PostComments from './components/PostComments'
import VoteHandler from '../common/VoteHandler'

class PostDetail extends Component {

  componentDidMount() {
    const id = this.props.match.params.id || false
    this.props.requestGetPost(id)
  }

  componentWillReceiveProps(nextProps) {
    if( nextProps.match.params.id !== this.props.match.params.id ) {
      const id = this.props.match.params.id || false
      this.props.requestGetPost(id)
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
        <section {...styles.container}>
          <div {...styles.post}>
            <VoteHandler entry={post} />

            <div>
              <h3 {...styles.postTitle}>
                {post.title}
              </h3>

              <time {...styles.postMeta}
                dateTime={dateTimeFormat(post.timestamp)}
              >
                {fromNow(post.timestamp)}
                <span> by <b>{post.author}</b></span>
                <span> in <b>{post.category}</b></span>
              </time>

              <div {...styles.postBody}>
                {post.body}
              </div>

              <PostEditor post={post} history={history} />
            </div>
          </div>

          {postComments && (
              <PostComments 
                comments={postComments}
                onNewComment={this.handleNewComment}
              />
            )}
        </section>
      )
    } else {
      return (
        <section>
          This post no longer exists.
        </section>
      )
    }
  }
}

const styles = {
  container: css({
    maxWidth: '75%',
    margin: 15,
    padding: 20,
    backgroundColor: 'white',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.14)'
  }),
  post: css({
    display: 'flex',
    flexDirection: 'row'
  }),
  postTitle: css({
    margin: 0,
    padding: 0,
    color: '#3b6b50'
  }),
  postMeta: css({
    fontStyle: 'italic',
    color: '#9e9e9e'
  }),
  postBody: css({
    margin: 15
  })
}

const mapStateToProps  = ({ post, comments }) => ({
  post: post.post 
    ? post.post 
    : post,
  comments
})

export default connect(mapStateToProps, { requestGetPost, addNewComment })(PostDetail)