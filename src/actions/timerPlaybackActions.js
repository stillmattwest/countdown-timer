export const setTimerSpeed = (speed) => {
    return{
        type:"SET_TIMER_SPEED",
        payload:speed
    }; 
};

export const setDarkMode = (mode) => {
    return{
        type:"SET_DARK_MODE",
        payload:mode
    };
};