import { 
  SET_SORT
} from './constTypes';

export const setSort = (orderby, sort) => {
  return {
    type: SET_SORT,
    orderby,
    sort
  }
}