import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postVote } from '../../actions/vote'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'


class VoteHandler extends Component {
  
  vote = (entry, option) => {
    const type 
      = entry.hasOwnProperty('parentId') 
      ? 'comments' 
      : 'posts'
    this.props.postVote(entry.id, option, type)
  }

  render () {

    const { entry, vote } = this.props
    let score = (vote[entry.id] === undefined) ? entry.voteScore : vote[entry.id]

    return (
      <div>
        <button className="btn" 
          onClick={ () => { this.vote(entry, 'downVote') } }
        >
          <FaChevronDown flip="horizontal" />
        </button>
        <span className="input-group-addon">{score}</span>
        <button className="btn"
        onClick={ () => { this.vote(entry, 'upVote') } }
        >
          <FaChevronUp />
        </button>
      </div>
    )
  }
}

const mapStateToProps  = ({ vote }, ownProps) => ({
  vote
})

export default connect(mapStateToProps, { postVote })(VoteHandler)