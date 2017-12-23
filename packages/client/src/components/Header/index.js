import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories, selectCategory } from '../../actions/categories';

class Header extends Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  render () {
    const { categories } = this.props.categories;
    const routeCategory = this.props.match.params.category;
    return (
      <nav>
        <Link 
          to='/'
          alt='Readable'
        >Readable</Link>
        <div>
          <ul>
            { categories !== undefined && categories.map( category => (
              <li key={category.path} className={ 
                "nav-item" + (routeCategory === category.name ? " active" : "")
              }>
                <Link
                  to={`/${category.path}`}
                >{category.name}</Link>
              </li>
            ))}
            <li>
              <Link
                to='/new'
              >new post</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps  = ({ categories, selectedCategory }) => ({
  categories,
  selectedCategory
})

export default connect(mapStateToProps, { fetchCategories, selectCategory })(Header);