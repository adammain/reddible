import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import { fetchCategories, selectCategory } from '../../actions/categories'

class Header extends Component {

  componentDidMount() {
    this.props.fetchCategories()
  }

  render () {
    const { categories } = this.props.categories
    const routeCategory = this.props.match.params.category
    return (
      <Navbar categories={categories} routeCategory={routeCategory} />
    )
  }
}

const mapStateToProps = ({ categories, selectedCategory }) => ({
  categories,
  selectedCategory
})

export default connect(mapStateToProps, { fetchCategories, selectCategory })(Header)