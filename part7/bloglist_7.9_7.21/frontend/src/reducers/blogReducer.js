import { createSlice } from '@reduxjs/toolkit';
import blogs from '../services/blogs';

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        loading: false,
        error: null,
        blogs: []
    },
    reducers: {
        add: (state, action) => {
            state.blogs.push(action.payload);
        },

        remove: (state, action) => {
            const id = action.payload;
            state.blogs = state.blogs.filter((blog) => blog.id !== id);
        },

        like: (state, action) => {
            const id = action.payload;
            const blog = state.blogs.find((blog) => blog.id === id);

            if (blog) {
                blog.likes = blog.likes + 1;
            }
        },

        setBlogs: (state, action) => {
            const blogs = action.payload.sort((a,b) => b.likes - a.likes);
            state.blogs = blogs;
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        setError: (state, action) => {
            state.error = action.payload;
        }
    },
});

export const getBlogs = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));
        try {
            const res = await blogs.getAll();
            dispatch(setBlogs(res));
        } catch (e) {
            dispatch(setError(e.name));
        } finally {
            dispatch(setLoading(false));
        }
    };
};

export const addBlog = (content) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));
        try {
            const newBlog = await blogs.addBlog(content);
            dispatch(add(newBlog));
        } catch (e) {
            dispatch(setError(e.name));
        } finally {
            dispatch(setLoading(false));
        }
    };
};

export const likeBlog = (id) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));
        try {
            await blogs.likeBlog(id);
            dispatch(like(id));
        } catch (e) {
            dispatch(setError(e.name));
        } finally {
            dispatch(setLoading(false));
        }
    };
};

export const removeBlog = (id) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        dispatch(setError(null));
        try {
            await blogs.deleteBlog(id);
            dispatch(remove(id));
        } catch (e) {
            dispatch(setError(e.name));
        } finally {
            dispatch(setLoading(false));
        }
    };
};

export const { add, remove, like, setBlogs, setLoading, setError } = blogSlice.actions;
export default blogSlice.reducer;
