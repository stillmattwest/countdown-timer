export const setTimerReducer = (state =[],action) => {
    if(action.type === 'SET_TIMER'){
        return action.payload;
    }

    return state;
}
