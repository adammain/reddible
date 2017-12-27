import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import FormSerialize from 'form-serialize'
import { css } from 'glamor'

import { requestUpdateComment } from '../../actions/comments'
import CommentEditor from './CommentEditor'
import VoteControl from '../common/VoteHandler'
import { fromNow } from '../../utils/helpers'

class CommentItem extends PureComponent {

  state = {
    isEditing: false
  }

  cancelEdit = ( event ) => {
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

  handleUpdate = ( event ) => {
    event.preventDefault()
    const serializedComment = FormSerialize(event.target, {hash: true})
    const updatedComment = {
      ...this.props.comment,
      ...serializedComment
    }
    this.props.requestUpdateComment(updatedComment).then( data => {
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
            onSubmit={this.handleUpdate}
          >
            <div>
              <input 
                {...styles.nameInput}
                type="text" 
                name="author" 
                placeholder="Your name" 
                defaultValue={comment.author}
                required 
              />
            </div>
            <div>
              <textarea 
                {...styles.commentInput}
                name="body"
                rows="3"
                placeholder="Your comment"
                defaultValue={comment.body}
                required
              />
            </div>
            <div>
              <button {...styles.cancelBtn} onClick={this.cancelEdit}>
                Cancel
              </button>
              <button {...styles.submitBtn}>
                Submit Changes
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
              
              <CommentEditor 
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
  }),
  nameInput: css({
    padding: 7,
    margin: 7,
    width: 250,
  }),
  commentInput: css({
    padding: 7,
    margin: 7,
    width: 250,
    height: 50
  }),
  cancelBtn: css({
    position: 'relative',
    fontFamily: 'monospace',
    textDecoration: 'none',
    backgroundColor: '#777777',
    color: 'white',
    padding: 5,
    fontSize: 13,
  }),
  submitBtn: css({
    position: 'relative',
    margin: 5,
    fontFamily: 'monospace',
    textDecoration: 'none',
    backgroundColor: '#c13838',
    color: 'white',
    padding: 5,
    fontSize: 13,
  }),
}

const mapStateToProps  = ({ editMode }) => ({
  editMode
})

export default connect(mapStateToProps, { requestUpdateComment })(CommentItem)