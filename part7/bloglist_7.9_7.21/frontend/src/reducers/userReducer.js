import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '../services/login';

export const loginUser = createAsyncThunk('user/login', async ({ username, password }) => {
    const user = await loginService.userLogin(username, password);

    if (user.error) {
        throw new Error(user.error);
    }

    const userData = {
        token: user.token,
        ...user
    };

    window.localStorage.setItem('userData', JSON.stringify(userData));
    return user;
});

export const initUser = createAsyncThunk('user/init', async () => {
    const storedUserData = window.localStorage.getItem('userData');
    let user = null;

    if (storedUserData) {
        user = JSON.parse(storedUserData);
    }

    return user;
});

export const logoutUser = createAsyncThunk('user/logout', async () => {
    window.localStorage.removeItem('userData');
    return null;
});

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(initUser.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            return null;
        });
    }
});

export default userSlice.reducer;
