import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PostControls from '../PostControls'
import { fromNow } from '../../utils/helpers'

class Post extends Component {
  render () {
    const { post } = this.props
    
    return (
      <div className="Post card">
        <div className="card-body">
          <h6>{post.category}</h6>
          <Link to={`/${post.category}/${post.id}`}>
            <h4>{post.title}</h4>
          </Link>
          <footer className="blockquote-footer">
						Written by {post.author}, { fromNow(post.timestamp)}
					</footer>
        </div>
        <div className="card-footer">
          {/* <PostControls post={post} /> */}
        </div>
      </div>
    )
  }
}

export default Post