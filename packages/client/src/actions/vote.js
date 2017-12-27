import * as api from '../utils/api'

import { 
  VOTE 
} from './constTypes'

// GET VOTE: ALL
export const vote = (id, score) => ({
  type: VOTE,
  id, 
  score
})

export const requestPostVote = (id, option, type) => dispatch => (
  api.requestPostVote(id, option, type)
     .then( data => dispatch(vote(id, data.voteScore)) )
)