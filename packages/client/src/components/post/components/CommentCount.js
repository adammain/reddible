import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as commentActions from '../../../actions/comments'
import FaComments from 'react-icons/lib/fa/comments'


class CommentsCountCountrol extends Component {

  componentDidMount () {
    const parentId = this.props.parentId
    this.props.requestPostComments(parentId)
  }

  commentCount = comments => {
    return comments 
      ? comments.length 
      : 0
  }

  render () {

    const { comments, parentId } = this.props

    const commentCount = this.commentCount( comments[parentId] )

    return (
      <div>
        <span>
          <FaComments />
        </span>
        <span>
          {commentCount}
        </span>
      </div>
    )
  }
}

const mapStateToProps  = ({ comments }, ownProps) => ({
  comments
})

export default connect(mapStateToProps, commentActions)(CommentsCountCountrol)