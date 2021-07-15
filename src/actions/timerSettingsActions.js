export const setTimer = (minutes) => {
    return {
      type: "SET_TIMER",
      payload: minutes,
    };
  };