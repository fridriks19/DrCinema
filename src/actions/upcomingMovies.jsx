import upcomingMoviesService from '../services/upcomingMoviesService';
import * as constants from '../constants';


export const getUpcomingMovies = () => {
  return async dispatch => {
    try {
      const upcomingMovies = await upcomingMoviesService.getUpcomingMovies();
      dispatch(getUpcomingMoviesSuccess(upcomingMovies));
    } catch (err) {
      // TODO: Should dispatch an error action
    }
  };
}

const getUpcomingMoviesSuccess = (upcomingMovies) => {
  return {
    type: constants.GET_UPCOMING_MOVIES,
    payload: upcomingMovies
  }
};
