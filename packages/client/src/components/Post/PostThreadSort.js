import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { css } from 'glamor'

import * as sortActions from '../../actions/sort'

class SortButton extends Component {
  render () {
    const { 
      orderby, 
      sort, 
      option, 
      onClickHandler 
    } = this.props

    return (
      <button 
        type="button" 
        onClick={ () => {onClickHandler(option, sort)}}
        {...styles.sortButton}
      >
        {option}
      </button>
    )
  }
}

class PostThreadSort extends Component {

  componentDidMount() { 
    this.props.setSort('NEW', 'asc')
  }

  handleSort = (option, sort) => {
    this.props.setSort(option, sort === 'asc' ? 'desc' : 'asc')
  }

  render () {
    const { sort } = this.props

    return (
      <div>
        { sort.orderby && (
          <div {...styles.container} >
            <SortButton 
              onClickHandler={this.handleSort} 
              orderby={ sort.orderby } 
              sort={sort.sort} 
              option="NEW" 
            />

            <SortButton 
              onClickHandler={this.handleSort} 
              orderby={ sort.orderby } 
              sort={sort.sort} 
              option="TOP" 
            />
          </div>
        )}
      </div>
    )
  }
}

const styles = {
  container: css({
    padding: 10,
    backgroundColor: '#00000070'
  }),
  sortButton: css({
    borderColor: 'transparent',
    borderStyle: 'none',
    borderWidth: 0,
    backgroundColor: 'transparent',
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'white',
    fontFamily: 'monospace',
    cursor: 'pointer',
    fontWeight: 'bold'
  })
}

const mapStateToProps  = ({ sort }) => ({
  sort
})

export default connect(mapStateToProps, sortActions)(PostThreadSort)