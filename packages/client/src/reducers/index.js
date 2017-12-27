import { combineReducers } from 'redux'

import categories from './categories'
import posts from './posts'
import post from './post'
import vote from './vote'
import comments from './comments'
import sort from './sort'

export default combineReducers({
  categories,
  posts,
  post,
  vote,
  comments,
  sort
})