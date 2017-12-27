import React, { Component } from 'react'
import { css } from 'glamor'

import CommentItem from '../../comment/CommentItem'

class PostComments extends Component {

  sortCommentsByDate = ( comments ) => {
    if( comments !== undefined ) {
      return comments.sort((a, b) => a.timestamp > b.timestamp)
    } else {
      return comments
    }
  }

  handleCommentSubmit = ( event ) => {
    event.preventDefault()
    this.props.onNewComment( event )
    this.commentForm.reset()
  }

  render () {
    const { comments } = this.props

    return (
      <div {...styles.container}>
        <div>
          <h5>
            {comments.length 
              ? `Comments (${comments.length})` 
              : "No comments"}
          </h5>
        </div>
        <div {...styles.postComment}>
          {this.sortCommentsByDate(comments).map(comment => (
            <CommentItem 
              key={comment.id} 
              comment={comment}
            />
          ))}


          <h2 {...styles.title}>New Comment</h2>

          <form 
            onSubmit={this.handleCommentSubmit}
            ref={(commentForm) => this.commentForm = commentForm}
          >
            <div>
              <label {...styles.label}>Name: </label>
              <input 
                {...styles.nameInput}
                type="text" 
                name="author" 
                placeholder="Your name" 
                required 
              />
            </div>
            <div>
              <textarea 
                {...styles.commentInput}
                name="body"
                rows="3"
                placeholder="Add your comment here..."
                required
              ></textarea>
            </div>
            <button {...styles.submitBtn}>Submit Comment</button>
          </form>
        </div>
      </div>
    )
  }
}

const styles = {
  container: css({
    marginTop: 40,
    borderTopWidth: .25,
    borderTopColor: '#eeeeee',
    borderTopStyle: 'solid'
  }),
  title: css({
    fontFamily: 'monospace',
    fontSize: 25
  }),
  label: css({
    fontFamily: 'monospace',
    fontSize: 20
  }),
  nameInput: css({
    padding: 10,
    margin: 10,
    width: 250,
  }),
  commentInput: css({
    padding: 10,
    margin: 10,
    width: 450,
    height: 150
  }),
  postComment: css({
    padding: 15
  }),
  commentMeta: css({
    padding: 10,
    backgroundColor: '#00000070'
  }),
  submitBtn: css({
    position: 'relative',
    margin: 10,
    fontFamily: 'monospace',
    textDecoration: 'none',
    backgroundColor: '#c13838',
    color: 'white',
    padding: 10,
    fontSize: 'x-large',
  }),
}

export default PostComments