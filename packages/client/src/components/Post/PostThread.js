import React, { Component } from 'react'
import { connect } from 'react-redux'

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
      <div className="container">
        {sortedPosts 
          && sortedPosts.length 
            ? sortedPosts.map( post => (
              <Post
                key={post.id}
                post={post}
              />
            ))
            :(<div className="PostListView--no-posts card bg-light">
              <div className="card-body text-center">
                No posts in <em>{this.props.match.params.category}</em>
              </div>
            </div>)
        }
      </div>
    )
  }
}

const mapStateToProps  = ({ posts, sort }) => ({
  posts, 
  sort
})

export default connect(mapStateToProps, { fetchPosts, selectCategory })(PostListView)