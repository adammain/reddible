import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { css } from 'glamor'

import PostEditor from '../PostEditor'
import { fromNow } from '../../../utils/helpers'
import VoteHandler from '../../common/VoteHandler'

class Post extends PureComponent {
  render () {
    const { post } = this.props
    
    return (
      <div {...styles.container}>
        <VoteHandler entry={post} />

        <div>
          <Link {...styles.link} to={`/${post.category}/${post.id}`}>
            <h4 {...styles.title}>{post.title}</h4>
          </Link>

          <div {...styles.postMeta}>
						<span>By <b>{post.author}</b>, {fromNow(post.timestamp)}</span>
            <span> in <b>{post.category}</b></span>
					</div>

          <PostEditor post={post} />
        </div>
      </div>
    )
  }
}

const styles = {
  container: css({
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }),
  title: css({
    marginBottom: 2,
    padding: 0,
    fontSize: 22,
    color: '#3b6b50'
  }),
  link: css({
    textDecoration: 'none'
  }),
  postMeta: css({
    fontStyle: 'italic',
    color: '#9e9e9e'
  }),
  postBody: css({
    margin: 15
  })
}

export default Post