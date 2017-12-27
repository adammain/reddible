import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { css } from 'glamor'

import Navbar from '../common/Navbar'
import { fetchCategories, selectCategory } from '../../actions/categories'
import PostThreadSort from '../post/PostThreadSort'
import HeaderBackground from '../../images/header.png'

class Header extends PureComponent {

  componentDidMount() {
    this.props.fetchCategories()
  }

  render () {
    const { categories } = this.props.categories
    const currentCategory = this.props.match.params.category
    return (
      <div {...styles.container}>
        <Navbar 
          style={styles.navbar} 
          categories={categories} 
          routeCategory={currentCategory} 
        />

        <div {...styles.threadSort}>
          <PostThreadSort {...this.props} />
        </div>
      </div>
    )
  }
}

const styles = {
  container: css({
    height: 400,
    backgroundImage: `url(${HeaderBackground})`,
  }),
  navbar: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    padding: 10,
  }),
  threadSort: css({
    position: 'relative',
    top: 330
  }),
}

const mapStateToProps = ({ categories, selectedCategory }) => ({
  categories,
  selectedCategory
})

export default connect(mapStateToProps, { fetchCategories, selectCategory })(Header)