import { createSlice } from '@reduxjs/toolkit';
import user from '../services/user';

const userFoundedSlice = createSlice({
    name: 'userFounded',
    initialState: null,
    reducers: {
        setUserFounded: (state, action) => {
            return action.payload;
        }
    }
});

export const getUser = (id) => {
    return async (dispatch) => {
        const userFounded = await user.getUserPerId(id);
        dispatch(setUserFounded(userFounded));
    };
};

export const { setUserFounded } = userFoundedSlice.actions;
export default userFoundedSlice.reducer;