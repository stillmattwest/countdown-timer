export const setPause = (pauseState) => {
    return {
      type: "SET_PAUSE",
      payload: pauseState,
    };
  };

export const setTimerRunning = (timerState) => {
  return {
    type: "SET_TIMER_RUNNING",
    payload: timerState
  };
};