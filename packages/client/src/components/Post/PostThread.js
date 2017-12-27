import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { css } from 'glamor'

import Post from './components/Post'
import { selectCategory } from '../../actions/categories'
import { fetchPosts } from '../../actions/posts'

class PostListView extends Component {

  componentDidMount() {
    const filter = this.props.match.params.category || false
    this.props.fetchPosts(filter)
  }

  componentWillReceiveProps(nextProps) {
    if( nextProps.match.params.category !== this.props.match.params.category ) {
      const filter = nextProps.match.params.category || false
      this.props.fetchPosts(filter)
    }
  }

  sort = (items, sortSetting) => {
    if (items) {
      let itemList = items.map(item => item)
      switch (sortSetting.orderby) {
        case 'NEW':
          return sortSetting.sort === 'asc' 
            ? itemList.sort((a, b) => a.timestamp > b.timestamp) 
            : itemList.sort((a, b) => a.timestamp < b.timestamp)
        case 'TOP':
          return sortSetting.sort === 'asc' 
            ? itemList.sort((a, b) => a.voteScore > b.voteScore) 
            : itemList.sort((a, b) => a.voteScore < b.voteScore)
        default:
          return itemList
      }
    } else {
      return items
    }
  }

  render () {
    const { posts } = this.props.posts
    const { sort } = this.props
    const sortedPosts = this.sort(posts, sort)

    return (
      <section {...styles.container}>
        <Link to='/new' {...styles.submitBtn}>
          Submit Text
        </Link>

        {sortedPosts 
          && sortedPosts.length 
            ? sortedPosts.map( post => (
              <Post
                key={post.id}
                post={post}
              />
            ))
            : <span>
                No posts in category <b>{this.props.match.params.category}</b> 
              </span>
        }
      </section>
    )
  }
}

const styles = {
  container: css({
    maxWidth: '75%',
    margin: 15,
    padding: 20,
    backgroundColor: 'white',
    'box-shadow': '0 1px 4px 0 rgba(0,0,0,0.14)'
  }),
  submitBtn: css({
    position: 'absolute',
    right: '4%',
    fontFamily: 'monospace',
    textDecoration: 'none',
    backgroundColor: '#c13838',
    color: 'white',
    padding: 10,
    fontSize: 'x-large',
  }),
}

const mapStateToProps  = ({ posts, sort }) => ({
  posts, 
  sort
})

export default connect(mapStateToProps, { fetchPosts, selectCategory })(PostListView)