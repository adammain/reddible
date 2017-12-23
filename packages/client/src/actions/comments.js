import * as api from '../utils/api';

import { 
  GET_POST_COMMENTS,
  GET_COMMENT,
  DELETE_COMMENT
} from './constTypes';

// GET_POST_COMMENTS
export const getPostComments = (parentId, comments) => ({
  type: GET_POST_COMMENTS,
  parentId,
  comments
});

export const fetchPostComments = parentId => dispatch => (
  api
      .fetchPostComments(parentId)
      .then(comments => dispatch(getPostComments(parentId, comments)))
);

// GET_COMMENT
export const getComment = (comment) => {
  return {
    type: GET_COMMENT,
    comment
  }
}

export const addNewComment = ( comment ) => dispatch => (
  api
      .addNewComment( comment )
      .then( data => dispatch(getComment( data )))
);

// DELETE_COMMENT
export const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
});

export const removeComment = ( comment ) => dispatch => (
  api
      .removeComment( comment.id )
      .then(dispatch(deleteComment(comment)))
);

// UPDATE_COMMENT
export const updateComment = ( comment ) => dispatch => (
  api
      .updateComment( comment )
      .then( data => dispatch(getComment( data )))
);