import * as api from '../utils/api'

import { 
  LOAD_CATEGORIES, 
  SELECT_CATEGORY 
} from './constTypes'

// Fetch categories from API
export const fetchCategories = () => dispatch => (
  api.fetchCategories()
      .then(categories => dispatch(loadCategories(categories)))
)