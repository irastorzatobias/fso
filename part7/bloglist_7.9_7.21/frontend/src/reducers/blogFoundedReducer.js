import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import blogs from '../services/blogs';

export const findBlog = createAsyncThunk(
    'blogFounded/findBlog',
    async (id) => {
        const response = await blogs.getPerId(id);
        return response;
    }
);

const blogFoundedSlice = createSlice({
    name: 'blogFounded',
    initialState: null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(findBlog.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export default blogFoundedSlice.reducer;