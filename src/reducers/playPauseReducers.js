export const setPauseReducer = (state =[],action) => {
    if(action.type === 'SET_PAUSE'){
        return action.payload;
    }

    return state;
}