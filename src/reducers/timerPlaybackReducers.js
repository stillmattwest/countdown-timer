export const setTimerSpeedReducer = (state=[],action) => {
    if(action.type === 'SET_TIMER_SPEED'){
        return action.payload;
    }

    return state;
}

export const setDarkModeReducer = (state = [], action) => {
    if(action.type === 'SET_DARK_MODE'){
        return action.payload;
    }

    return state;
}