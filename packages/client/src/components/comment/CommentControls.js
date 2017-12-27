import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { removeComment } from '../../actions/comments'
import PostControls from '../common/PostControls'

class CommentControls extends Component {
  
  handleDeleteComment = () => {
    this.props.removeComment(this.props.comment)   
  }

  handleEditComment = () => {
    this.props.editClickHandler()
  }

  render () {
    const { comment, style } = this.props

    return (
        <PostControls 
          onDeleteClick={() => {this.handleDeleteComment()}}
          onEditClick={() => {this.handleEditComment()}}
          style={style}
        />
    )
  }
}

export default withRouter(connect(null, { removeComment })(CommentControls))