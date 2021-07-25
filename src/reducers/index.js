import { combineReducers } from 'redux';
import favoriteMovieReducer from './favoriteMovieReducer';
import movieReducer from './movieReducer';

const combReducer = combineReducers({
    movie: movieReducer,
    favorites: favoriteMovieReducer
});

export default  combReducer;