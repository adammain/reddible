import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { removePost } from '../../actions/post'
import VoteHandler from '../common/VoteHandler'
import CommentCount from './components/CommentCount'
import EditDeleteControls from '../common/EditDeleteControls'

class PostControls extends Component {

  handleDeletePost = () => {
    this.props.removePost(this.props.post).then( () => {
      if( this.props.categories.selectedCategory )
        this.props.history.push(`/${this.props.categories.selectedCategory}`)
      else
        this.props.history.push('/')
    })    
  }

  handleEditPost = () => {
    this.props.history.push(`/edit/${this.props.post.id}`)
  }

  render () {

    const { post } = this.props

    return (
      <div className="PostControls">
        <div className="btn-toolbar">
          <VoteHandler entry={post} />
          <CommentCount parentId={post.id} />
          <EditDeleteControls 
            onDeleteClick={ () => { this.handleDeletePost() } }
            onEditClick={ () => { this.handleEditPost() } }
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps  = ({ categories }) => ({
  categories
})

export default withRouter(connect(mapStateToProps, { removePost })(PostControls))