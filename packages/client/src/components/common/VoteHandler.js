import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { requestPostVote } from '../../actions/vote'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import { css } from 'glamor'


class VoteHandler extends PureComponent {
  
  vote = (entry, option) => {
    const type 
      = entry.hasOwnProperty('parentId') 
      ? 'comments' 
      : 'posts'
    this.props.requestPostVote(entry.id, option, type)
  }

  render () {

    const { entry, vote } = this.props
    let score = (vote[entry.id] === undefined) ? entry.voteScore : vote[entry.id]

    return (
      <div {...styles.container}>
        <button 
          {...styles.iconBtn}
          onClick={() => {this.vote(entry, 'upVote')}}
        >
          <FaChevronUp />
        </button>

        <span>{score}</span>

        <button 
          {...styles.iconBtn}
          onClick={() => {this.vote(entry, 'downVote')}}
        >
          <FaChevronDown />
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
    cursor: 'pointer'
  })
}

const mapStateToProps  = ({ vote }, ownProps) => ({
  vote
})

export default connect(mapStateToProps, { requestPostVote })(VoteHandler)