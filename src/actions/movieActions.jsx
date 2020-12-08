import movieService from '../services/movieService';
import * as constants from '../constants';




export const getMovie = () => {
    return async dispatch => {
        try {
            const movie = await movieService.getMovie();
            dispatch(getMovieSuccess(movie));
        } catch (err) {
            // TODO: Should dispatch an error action
        }
    };
}

const getMovieSuccess = movie => ({
    type: constants.GET_MOVIE,
    payload: movie
});
