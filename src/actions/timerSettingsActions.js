export const setTimerMins = (minutes) => {
    return {
      type: "SET_TIMER_MINS",
      payload: minutes,
    };
  };

export const setTimerSecs = (seconds) => {
  return {
    type: "SET_TIMER_SECS",
    payload:seconds
  }
}

export const setInitialTime = (minutes) => {
  return{
    type:"SET_INITIAL_TIME",
    payload:minutes
  }
}