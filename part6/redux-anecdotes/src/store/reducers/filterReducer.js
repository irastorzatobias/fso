import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter: (state, action) => {
      console.log(action);
      return action.payload.trim();
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
