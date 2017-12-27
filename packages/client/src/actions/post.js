import * as api from '../utils/api'

import { 
  GET_POST,
  GET_NEW_POST,
  DELETE_POST
} from './constTypes'

// GET POST: MATCH
export const requestGetPost = id => dispatch => (
  api.requestGetPost(id)
     .then(post => dispatch(getPost(post)))
)

export const getPost = post => ({
  type: GET_POST,
  post
})

export const updatePost = post => dispatch => (
  api.updatePost(post)
     .then(data => dispatch(getPost(data)))
)

// GET POST: MATCH MOST RECENT
export const getNewPost = post => ({
  type: GET_NEW_POST,
  post
})

// ADD POST
export const requestAddPost = post => dispatch => (
  api.requestAddPost( post )
     .then(post => dispatch(getNewPost(post)))
)

// DELETE POST
export const requestDeletePost = post => dispatch => (
  api.requestDeletePost(post.id)
     .then(dispatch(deletePost(post)))
)

export const deletePost = post => ({
  type: DELETE_POST,
  post
})