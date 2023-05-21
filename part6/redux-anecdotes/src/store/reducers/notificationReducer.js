import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotification: (state, action) => {
      return action.payload;
    },
    removeNotification: (state, action) => {
      return "";
    },
  },
});

export const { setNotification, removeNotification } =
  notificationSlice.actions;

export const notificationSetter = (text) => {
  return async (dispatch) => {
    dispatch(setNotification(text));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 500);
  };
};

export default notificationSlice.reducer;
