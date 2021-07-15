export const setMessage = (txt) => {
    return {
      type: "SET_MESSAGE",
      payload: txt,
    };
  };