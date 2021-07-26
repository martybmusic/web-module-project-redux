import { DELETE_FAVE, ADD_FAVE, TOGGLE_FAVE } from '../actions/favoriteMovieActions';

const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoriteMovieReducer = (state = initialState, action) => {
    switch(action.type){
        case DELETE_FAVE:
        return({
            ...state,
            favorites: state.favorites.filter(item => item.id !==action.payload.id)
        })
        case ADD_FAVE:
            const newFave = {
                ...state,
                favorites: action.payload,
            }
            return({
                ...state,
                favorites: [...state.favorites, newFave]
            })
        case TOGGLE_FAVE:
        return({
            ...state,
            displayFavorites: !action.payload
        })
        default:
            return state
    }
}

export default favoriteMovieReducer;