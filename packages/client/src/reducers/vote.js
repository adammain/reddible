import { 
  VOTE 
} from '../actions/constTypes'

const vote = (state = {}, action) => {
  const { id, score } = action
  switch (action.type) {
    case VOTE:
      return {
        ...state,
        [id]: score
      }

    default:
      return state
  }
}

export default vote