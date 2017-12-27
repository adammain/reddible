import React, { Component } from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import { css } from 'glamor'


class PostControls extends Component {
  render () {
    const { onDeleteClick, onEditClick, style } = this.props

    return (
      <div {...style}>
        <button {...styles.iconBtn} onClick={onEditClick}>
          <FaPencil />
          <span> Edit</span>
        </button>

        <button {...styles.iconBtn} onClick={onDeleteClick}>
          <FaTrash />
          <span> Delete</span>
        </button>
      </div>
    )
  }
}

const styles = {
  container: css({
    padding: 20,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 0,
  }),
  iconBtn: css({
    borderColor: 'transparent',
    paddingRight: 5,
    paddingLeft: 5,
    cursor: 'pointer'
  })
}

export default PostControls