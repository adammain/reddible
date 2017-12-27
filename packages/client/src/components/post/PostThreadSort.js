import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { css } from 'glamor'

import * as sortActions from '../../actions/sort'
import SortButton from './components/SortButton'

class PostThreadSort extends PureComponent {

  componentDidMount() { 
    this.props.setSortOption('NEW', 'asc')
  }

  handleSort = (option, sort) => {
    this.props.setSortOption(option, sort === 'asc' ? 'desc' : 'asc')
  }

  render () {
    const { sort } = this.props

    return (
      <div>
        { sort.orderby && (
          <div {...styles.container} >
            <SortButton 
              onClickHandler={this.handleSort} 
              sort={sort.sort} 
              option="NEW" 
            />

            <SortButton 
              onClickHandler={this.handleSort} 
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
  })
}

const mapStateToProps  = ({ sort }) => ({
  sort
})

export default connect(mapStateToProps, sortActions)(PostThreadSort)