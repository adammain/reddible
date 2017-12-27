import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'

import { updateComment } from '../../../actions/comments'
import CommentControls from '../CommentControls'

class CommentItem extends Component {

  state = {
    isEditing: false
  }

  cancelCommentEdit = ( event ) => {
    event.preventDefault()
    this.setState({
      isEditing: false
    })
  }

  showEditComment = () => {
    this.setState({
      isEditing: true
    })
  }

  handleCommentUpdate = ( event ) => {
    event.preventDefault()
    const serializedComment = FormSerialize(event.target, {hash: true})
    const updatedComment = {
      ...this.props.comment,
      ...serializedComment
    }
    this.props.updateComment(updatedComment).then( data => {
      this.setState({
        isEditing: false
      })
    })
  }

  render () {
    const { comment } = this.props    

    return this.state.isEditing ? (
      <li 
        key={comment.id}
      >
        <form 
          ref={(commentUpdateForm) => this.commentUpdateForm = commentUpdateForm}
          onSubmit={ this.handleCommentUpdate }
        >
          <div>
            <input 
              type="text" 
              name="author" 
              placeholder="Your name" 
              defaultValue={comment.author}
              required 
            />
          </div>
          <div>
            <textarea 
              name="body"
              rows="3"
              placeholder="Your comment"
              defaultValue={comment.body}
              required
            />
          </div>
          <div>
            <button onClick={this.cancelCommentEdit}>
              Cancel
            </button>
            <button>
              Save Changes
            </button>
          </div>
        </form>
      </li>
    ) : 
    (
      <li 
        key={comment.id}
      >
        <strong> {comment.author}: </strong> {comment.body}
        <CommentControls 
          comment={comment} 
          editClickHandler={this.showEditComment} 
        />
      </li>
    )
  }
}

const mapStateToProps  = ({ editMode }) => ({
  editMode
})

export default connect(mapStateToProps, { updateComment })(CommentItem)