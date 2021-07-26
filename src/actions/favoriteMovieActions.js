export const DELETE_FAVE = "DELETE_FAVE";
export const ADD_FAVE = "ADD_FAVE";
export const TOGGLE_FAVE = "TOGGLE_FAVE";

export const deleteFave = (movie)=>{
    return({type: DELETE_FAVE, payload:movie});
}

export const addFave = (movie) => {
    return({type: ADD_FAVE, payload:movie})
}

export const toggleFave = (favorites) => {
    return({type: TOGGLE_FAVE, payload: favorites})
}
