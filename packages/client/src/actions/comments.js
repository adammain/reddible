import * as api from '../utils/api'

import { 
  GET_POST_COMMENTS,
  GET_COMMENT,
  DELETE_COMMENT
} from './constTypes'

// GET POST COMMENTS: ALL
export const getPostComments = (parentId, comments) => ({
  type: GET_POST_COMMENTS,
  parentId,
  comments
})

export const requestPostComments = parentId => dispatch => (
  api.requestPostComments(parentId)
     .then(comments => dispatch(getPostComments(parentId, comments)))
)

// GET COMMENT: MATCH
export const getComment = comment => {
  return {
    type: GET_COMMENT,
    comment
  }
}

export const addNewComment = comment => dispatch => (
  api.addNewComment(comment)
     .then(data => dispatch(getComment(data)))
)

// DELETE COMMENT: MATCH
export const requestDeleteComment = comment => dispatch => (
  api.requestDeleteComment(comment.id)
     .then(dispatch(deleteComment(comment)))
)

export const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
})

// UPDATE COMMENT: MATCH
export const requestUpdateComment = comment => dispatch => (
  api.requestUpdateComment(comment)
     .then(data => dispatch(getComment(data)))
)