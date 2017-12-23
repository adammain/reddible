import * as api from '../utils/api'

import { 
  GET_CATEGORIES, 
  SELECT_CATEGORY 
} from './constTypes'

// Async fetch handler -> call Load when result returned
export const fetchCategories = () => dispatch => (
  api.fetchCategories()
      .then(categories => dispatch(getCategories(categories)))
)

// GET all categories
export const getCategories = categories => ({
    type: GET_CATEGORIES,
    categories
});

// Select category
export const selectCategory = (selectedCategory) => {
    return {
        type: SELECT_CATEGORY,
        selectedCategory
    }
}