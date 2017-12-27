import React, { Component } from 'react'
import CommentItem from '../../comment/components/CommentItem'

class PostComments extends Component {

  // Sort by date asc
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
          <h6>
            {comments.length 
              ? `Comments (${comments.length})` 
              : "No comments"}
          </h6>
        </div>
        <ul>
          {this.sortCommentsByDate(comments).map( comment => (
            <CommentItem 
              key={comment.id} 
              comment={comment}
            />
          ))}
          <li>
            <h6>Add Comment</h6>
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
          </li>
        </ul>
      </div>
    )
  }
}

export default PostComments