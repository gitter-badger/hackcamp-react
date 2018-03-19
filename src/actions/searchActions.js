import {SELECT_TAB, UPDATE_SEARCH_VALUE} from '../constants/actions';

/**
 * @param searchTerm: search term
 */
export const updateSearch = searchTerm => ({
  type: UPDATE_SEARCH_VALUE,
  payload: searchTerm
});

/**
 * @param genre: a genre you want to filter by
 */
export const selectTab = genre => ({
  type: SELECT_TAB,
  payload: genre
});
