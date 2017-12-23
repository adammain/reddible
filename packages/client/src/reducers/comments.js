import { 
  GET_POST_COMMENTS,
  GET_COMMENT,
  DELETE_COMMENT
} from '../actions/constTypes';

const comments = (state = {}, action) => {
  const { comment } = action;
  switch (action.type) {
    case GET_POST_COMMENTS:
      const { parentId, comments } = action;
      return {
        ...state,
        [parentId]: comments
      };

    case GET_COMMENT:
      const existingComment = state[comment.parentId].filter( c => c.id === comment.id ).length;
      return {
        ...state,
        [comment.parentId]: existingComment ? 
          state[comment.parentId].map( c => c.id === comment.id ? comment : c)
          : state[comment.parentId].concat(comment)
      };
    
    case DELETE_COMMENT:
      return {
        ...state,
        [comment.parentId]: state[comment.parentId].filter( c => c.id !== comment.id )
      };

    default:
      return state;
  }
}

export default comments;