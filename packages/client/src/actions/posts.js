import * as api from '../utils/api'

import { 
  GET_POSTS
} from './constTypes'


// GET POST(S): ALL
export const requestGetPosts = filter => dispatch => (
  api.requestGetPosts(filter)
     .then(posts => dispatch(getPosts(posts)))
)

export const getPosts = posts => ({
  type: GET_POSTS,
  posts
})