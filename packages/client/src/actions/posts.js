import * as api from '../utils/api';

import { 
  GET_POSTS
} from './constTypes';


// GET posts
export const getPosts = posts => ({
  type: GET_POSTS,
  posts
});

export const fetchPosts = (filter) => dispatch => (
  api.fetchPosts(filter)
      .then(posts => dispatch(getPosts(posts)))
);