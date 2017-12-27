import React, { Component } from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'


class EditDeleteControls extends Component {
  render () {
    const { onDeleteClick, onEditClick } = this.props

    return (
      <div>
        <button 
          onClick={ onEditClick }
        >
          <FaPencil />
          Edit
        </button>

        <button 
          onClick={ onDeleteClick }
        >
          <FaTrash />
          Delete
        </button>
      </div>
    )
  }
}

export default EditDeleteControls