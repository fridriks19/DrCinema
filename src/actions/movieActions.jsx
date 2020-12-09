import movieService from '../services/movieService';
import * as constants from '../constants';




export const getAllMovies = () => {
  return async dispatch => {
    try {
      const allMovies = await movieService.getAllMovies();
      dispatch(getAllMoviesSuccess(allMovies));
    } catch (err) {
      // TODO: Should dispatch an error action
    }
  };
}

const getAllMoviesSuccess = (allMovies) => {
  return {
    type: constants.GET_ALL_MOVIES,
    payload: allMovies
  }
};
