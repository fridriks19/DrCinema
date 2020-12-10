import { combineReducers } from 'redux';
import movie from './movieReducer';
import cinema from './cinemaReducer';
import upcomingMovies from './upcomingMovieReducer';

export default combineReducers({
  movie,
  cinema,
  upcomingMovies,
});
