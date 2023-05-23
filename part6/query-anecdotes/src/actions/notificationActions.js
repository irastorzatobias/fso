export const setNotification = (payload) => {
  return {
    type: "SET_NOTIFICATION",
    payload
  };
};

export const resetNotification = () => {
  return {
    type: "CLEAR_NOTIFICATION",
  };
};
