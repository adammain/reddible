import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostEditor from '../PostEditor'

import { fromNow } from '../../../utils/helpers'

class Post extends Component {
  render () {
    const { post } = this.props
    
    return (
      <div>
        <div>
          <h6>{post.category}</h6>
          <Link to={`/${post.category}/${post.id}`}>
            <h4>{post.title}</h4>
          </Link>
          <footer>
						By {post.author}, {fromNow(post.timestamp)}
					</footer>
        </div>
        <div>
          <PostEditor post={post} />
        </div>
      </div>
    )
  }
}

export default Post