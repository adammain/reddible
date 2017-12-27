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
      <div>
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

          <form 
            onSubmit={this.handleCommentSubmit}
            ref={(commentForm) => this.commentForm = commentForm}
          >
            <div>
              <input 
                type="text" 
                name="author" 
                placeholder="Your name" 
                required 
              />
            </div>
            <div>
              <textarea 
                name="body"
                rows="3"
                placeholder="Your comment"
                required
              ></textarea>
            </div>
            <button>Add Comment</button>
          </form>
        </div>
      </div>
    )
  }
}

const styles = {
  postComment: css({
    padding: 15
  }),
  commentMeta: css({
    padding: 10,
    backgroundColor: '#00000070'
  }),
}

export default PostComments