export const setTimerSpeedReducer = (state=[],action) => {
    if(action.type === 'SET_TIMER_SPEED'){
        return action.payload;
    }

    return state;
}