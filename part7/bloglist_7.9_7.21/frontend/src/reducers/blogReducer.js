import { createSlice } from '@reduxjs/toolkit';
import blogs from '../services/blogs';

const blogSlice = createSlice({
    name: 'blog',
    initialState: [],
    reducers: {
        add: (state, action) => {
            const content = action.payload;
            state.push(content);
        },

        remove: (state, action) => {
            const id = action.payload;
            return state.filter((blog) => blog.id !== id);
        },

        like: (state, action) => {
            const id = action.payload;
            const blog = state.find((blog) => blog.id === id);

            if (blog) {
                blog.likes = blog.likes + 1;
            }

            return state;
        },

        setBlogs: (state, action) => {
            return action.payload.sort((a,b) => b.likes - a.likes);
        },
    },
});

export const getBlogs = () => {
    return async (dispatch) => {
        const res = await blogs.getAll();
        dispatch(setBlogs(res));
    };
};

export const addBlog = (content) => {
    return async (dispatch) => {
        dispatch(add(content));
        await blogs.addBlog(content);
    };
};

export const likeBlog = (id) => {
    return async (dispatch) => {
        dispatch(like(id));
        await blogs.likeBlog(id);
    };
};

export const removeBlog = (id) => {
    return async (dispatch) => {
        try {
            await blogs.deleteBlog(id);
            dispatch(remove(id));
        } catch (e) {
            return e;
        }
    };
};

export const { add, remove, like, setBlogs } = blogSlice.actions;
export default blogSlice.reducer;
