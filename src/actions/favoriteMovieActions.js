export const DELETE_FAVE = "DELETE_FAVE";
export const ADD_FAVE = "ADD_FAVE";
export const TOGGLE_FAVE = "TOGGLE_FAVE";

export const deleteFave = (id)=>{
    return({type: DELETE_FAVE, payload:id});
}

export const addFave = (movie) => {
    return({type: ADD_FAVE, payload:movie})
}

export const toggleFave = () => {
    return({type: TOGGLE_FAVE})
}
