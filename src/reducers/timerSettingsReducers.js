export const setTimerMinsReducer = (state =[],action) => {
    if(action.type === 'SET_TIMER_MINS'){
        return action.payload;
    }

    return state;
}

export const setTimerSecsReducer = (state = [],action) => {
    if(action.type === 'SET_TIMER_SECS'){
        return action.payload;
    }

    return state;
}

export const setInitialTimeReducer = (state=[],action) => {
    if(action.type === 'SET_INITIAL_TIME'){
        return action.payload;
    }

    return state;
}
