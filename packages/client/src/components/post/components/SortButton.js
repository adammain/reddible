import React, { PureComponent } from 'react'
import { css } from 'glamor'


class SortButton extends PureComponent {
  render () {
    const { 
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

export default SortButton