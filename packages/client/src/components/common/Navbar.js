import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { css } from 'glamor'

class Navbar extends PureComponent {
  render () {
    const { categories, routeCategory, style } = this.props
    console.log("props", this.props)
    return (
      <nav {...styles.container} {...style.navbar}>
        <Link 
          to='/' 
          alt='Reddible'
          {...styles.title}
        >
          Reddible
        </Link>

        {categories 
          && categories.map( category => (
            <span key={category.path}>
              <Link 
                to={`/${category.path}`}
                {...styles.navItem}
              >
                {category.name}
              </Link>
            </span>)
          )
        }
      </nav>
    )
  }
}

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    padding: 5,
  }),
  title: css({
    paddingRight: 15,
    paddingTop: 3.3,
    paddingLeft: 6,
    fontWeight: 'bold',
    textDecorationLine: 'none',
    color: 'white',
    ':hover': {
      color: 'pink'
    },
    fontFamily: 'monospace'
  }),
  navItem: css({
    paddingRight: 15,
    paddingLeft: 15,
    textDecorationLine: 'none',
    color: 'white',
    ':hover': {
      color: 'pink'
    },
    fontFamily: 'monospace'
  }),
}

export default Navbar