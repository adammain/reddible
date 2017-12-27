import { 
  GET_POST,
  DELETE_POST
} from '../actions/constTypes'

const post = (state = {}, action) => {
  const { post } = action
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        post
      }

    case DELETE_POST:
      return {
        ...state,
        post: undefined
      }

    default:
      return state
  }
}

export default post