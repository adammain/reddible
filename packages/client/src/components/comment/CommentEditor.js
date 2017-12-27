import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { requestDeleteComment } from '../../actions/comments'
import PostControls from '../common/PostControls'

class CommentEditor extends PureComponent {
  
  handleDeleteComment = () => {
    this.props.requestDeleteComment(this.props.comment)   
  }

  handleEditComment = () => {
    this.props.editClickHandler()
  }

  render () {
    const { style } = this.props

    return (
        <PostControls 
          onDeleteClick={() => {this.handleDeleteComment()}}
          onEditClick={() => {this.handleEditComment()}}
          style={style}
        />
    )
  }
}

export default withRouter(connect(null, { requestDeleteComment })(CommentEditor))