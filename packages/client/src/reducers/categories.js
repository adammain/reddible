import { 
    GET_CATEGORIES, 
    SELECT_CATEGORY 
  } from '../actions/constTypes';
  
  const categories = (state = {}, action) => {
    const { categories, selectedCategory } = action
    switch (action.type) {
      
      case GET_CATEGORIES:
        return {
          ...state,
          categories
        };
  
      case SELECT_CATEGORY:
        return {
          ...state,
          selectedCategory
        }
      
      default:
        return state;
    }
  }
  
  export default categories;