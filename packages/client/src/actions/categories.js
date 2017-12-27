import * as api from '../utils/api'

import { 
  GET_CATEGORIES, 
  SELECT_CATEGORY 
} from './constTypes'

// GET CATEGORES: ALL - ASYNC HANDLER
export const requestGetCategories = () => dispatch => (
  api.requestGetCategories()
     .then(categories => dispatch(getCategories(categories)))
)

// GET CATEGORIES: ALL
export const getCategories = categories => ({
    type: GET_CATEGORIES,
    categories
})

// GET CATEGORY: MATCH
export const selectCategory = (selectedCategory) => {
    return {
        type: SELECT_CATEGORY,
        selectedCategory
    }
}