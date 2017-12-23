import * as api from '../utils/api';

import { 
  GET_POST,
  GET_NEW_POST,
  DELETE_POST
} from './constTypes'

// GET post
export const getPost = post => ({
  type: GET_POST,
  post
});

export const fetchPost = (id) => dispatch => (
  api
      .fetchPost(id)
      .then(post => dispatch(getPost(post)))
);

export const updatePost = post => dispatch => (
  api
      .updatePost(post)
      .then(data => dispatch(getPost(data)))
);



// Get new post
export const getNewPost = post => ({
  type: GET_NEW_POST,
  post
});

export const addNewPost = ( post ) => dispatch => (
  api
      .addPost( post )
      .then(post => dispatch(getNewPost(post)))
);

// DELETE post
export const deletePost = post => ({
  type: DELETE_POST,
  post
});

export const removePost = ( post ) => dispatch => (
  api
      .removePost( post.id )
      .then(dispatch(deletePost(post)))
);