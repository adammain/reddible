import * as api from '../utils/api';

import { 
  VOTE 
} from './constTypes';

// GET vote
export const vote = (id, score) => ({
  type: VOTE,
  id, 
  score
});

export const postVote = (id, option, type) => dispatch => (
  api.vote(id, option, type)
     .then( data => dispatch(vote(id, data.voteScore)) )
);