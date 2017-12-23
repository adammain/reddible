export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const LOAD_POST = 'LOAD_POST';
export const LOAD_NEW_POST = 'LOAD_NEW_POST';
export const DELETE_POST = 'DELETE_POST';
export const VOTE = 'VOTE';
export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POST_COMMENTS = 'LOAD_POST_COMMENTS';
export const LOAD_COMMENT = 'LOAD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const SET_SORT = 'SET_SORT';

export function addRecipe ({ day, recipe, meal }) {
  return {
    type: ADD_RECIPE,
    recipe,
    day,
    meal,
  }
}

export function removeFromCalendar ({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal,
  }
}