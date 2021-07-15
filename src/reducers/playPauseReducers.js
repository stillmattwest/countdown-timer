export const setPauseReducer = (state =[],action) => {
    if(action.type === 'SET_PAUSE'){
        return action.payload;
    }

    return state;
}

export const setTimerRunningReducer = (state = [],action) => {
    if(action.type === 'SET_TIMER_RUNNING'){
        return action.payload;
    }

    return state;
};