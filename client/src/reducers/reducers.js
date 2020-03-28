import { combineReducers } from 'redux';

import { SET_FILTER, SET_MOVIES } from '../actions/actions';

function visibilityFilter(state = '', action) {
  if (action.type === SET_FILTER) {
    return action.value;
  } else {
    return state;
  }
}

function movies(state = [], action) {
  if (action.type === SET_MOVIES) {
    return action.value;
  } else {
    return state;
  }
}
/*
So, the moviesApp is a combined reducer (a reducer made out of other reducers).
In order to keep the code clean, it splits into two smaller reducers.
This pattern is so common that Redux comes with a built-in function to implement it: combineReducers
*/
// function moviesApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     movies: movies(state.movies, action)
//   }
// }
// the code above is the same as here
const moviesApp = combineReducers({
  visibilityFilter,
  movies,
});

export default moviesApp;
