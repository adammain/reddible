import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { css } from 'glamor'

import { requestDeletePost } from '../../actions/post'
import CommentCount from './components/CommentCount'
import PostControls from '../common/PostControls'

class PostEditor extends PureComponent {

  handleDeletePost = () => {
    this.props.requestDeletePost(this.props.post).then(() => {
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
        <Link {...styles.commentCount} to={`/${post.category}/${post.id}`}>
          <CommentCount parentId={post.id} />
        </Link>

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
  }),
  commentCount: css({
    color: '#000000',
    textDecoration: 'none'
  })

}

const mapStateToProps  = ({ categories }) => ({
  categories
})

export default withRouter(connect(mapStateToProps, { requestDeletePost })(PostEditor))