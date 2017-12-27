import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'
import { css } from 'glamor'

import { updateComment } from '../../actions/comments'
import CommentControls from './CommentControls'
import VoteControl from '../common/VoteHandler'
import { fromNow } from '../../utils/helpers'

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

    if (this.state.isEditing) {
      return (
        <div {...styles.container} key={comment.id}>
          <form 
            ref={(commentUpdateForm) => 
              this.commentUpdateForm = commentUpdateForm}
            onSubmit={this.handleCommentUpdate}
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
        </div>
      )
    } else {
      return (
      <div {...styles.container} key={comment.id}>
          <VoteControl entry={ comment } />

          <div {...styles.comment}>
            {comment.body}

            <div {...styles.commentMeta}>
              <span>{fromNow(comment.timestamp)}</span>
              <span> by <strong>{comment.author}</strong></span>
              
              <CommentControls 
                comment={comment} 
                editClickHandler={this.showEditComment} 
                style={styles.displayInline}
              />
            </div>
          </div>
      </div>
      )
    }
  }
}

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }),
  comment: css({
    display: 'flex',
    flexDirection: 'column'
  }),
  commentMeta: css({
    fontStyle: 'italic',
    fontSize: 12,
    color: '#676767',
    padding: 2
  }),
  displayInline: css({
    display: 'inline'
  })
}

const mapStateToProps  = ({ editMode }) => ({
  editMode
})

export default connect(mapStateToProps, { updateComment })(CommentItem)