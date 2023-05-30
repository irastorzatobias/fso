/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import user from '../services/user';

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            return action.payload;
        },
        removeUser: () => {
            return null;
        },
        // totalUsers: (state, action) => {
        //     return action.payload;
        // }
    }
});

// export const getAllUsers = () => {
//     return async (dispatch) => {
//         const res = await user.getUsers();
//         dispatch(totalUsers(res));
//     };
// };

export const { setUser, removeUser, totalUsers } = userSlice.actions;
export default userSlice.reducer;