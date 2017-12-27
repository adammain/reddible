import { 
  SET_SORT
} from './constTypes'

// SET SORT OPTION
export const setSortOption = (orderby, sort) => {
  return {
    type: SET_SORT,
    orderby,
    sort
  }
}