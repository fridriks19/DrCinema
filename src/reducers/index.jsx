import { combineReducers } from 'redux';
import movie from './movieReducer';
import cinema from './cinemaReducer';

export default combineReducers({
  movie,
  cinema,

});
