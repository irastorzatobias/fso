/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import login from '../services/login';

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            return action.payload;
        },
        removeUser: () => {
            return null;
        }
    }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;