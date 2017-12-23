import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {

  render () {
    const { categories, routeCategory } = this.props
    return (
        <nav>
            <Link to='/' alt='Reddible'>Reddible</Link>
            <div>
                <ul>
                    { categories !== undefined && categories.map( category => (
                        <li 
                            key={category.path} 
                            className=
                            { 
                                "nav-item" 
                                + (routeCategory === category.name 
                                ? " active" 
                                : "")
                            }>
                            <Link to={`/${category.path}`}>
                                {category.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link to='/new'>new post</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
  }
}

export default Navbar