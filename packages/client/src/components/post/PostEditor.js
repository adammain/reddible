import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { css } from 'glamor'

import { removePost } from '../../actions/post'
import VoteHandler from '../common/VoteHandler'
import CommentCount from './components/CommentCount'
import PostControls from '../common/PostControls'

class PostEditor extends Component {

  handleDeletePost = () => {
    this.props.removePost(this.props.post).then(() => {
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
      <div {...styles.container}>
        <CommentCount parentId={post.id} />
        <PostControls 
          onDeleteClick={() => {this.handleDeletePost()}}
          onEditClick={() => {this.handleEditPost()}}
        />
      </div>
    )
  }
}

const styles = {
  container: css({
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
  })
}

const mapStateToProps  = ({ categories }) => ({
  categories
})

export default withRouter(connect(mapStateToProps, { removePost })(PostEditor))