import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { removeComment } from '../../actions/comments'
import VoteControl from '../common/VoteHandler'
import EditDeleteControls from '../common/EditDeleteControls'
import { fromNow } from '../../utils/helpers'

class CommentControls extends Component {
  
  handleDeleteComment = () => {
    this.props.removeComment(this.props.comment)   
  }

  handleEditComment = () => {
    this.props.editClickHandler()
  }

  render () {

    const { comment } = this.props

    return (
      <div>
        <VoteControl entry={ comment } />

        <div>
          <span><small>{ fromNow(comment.timestamp)}</small></span>
        </div>

        <EditDeleteControls 
          onDeleteClick={ () => { this.handleDeleteComment() } }
          onEditClick={ () => { this.handleEditComment() } }
        />
      </div>
    )
  }
}

export default withRouter(connect(null, { removeComment })(CommentControls))