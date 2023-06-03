import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './reducers/notificationReducer';
import userReducer from './reducers/userReducer';
import blogReducer from './reducers/blogReducer';
import userFoundedReducer from './reducers/userFoundedReducer';
import blogFoundedReducer from './reducers/blogFoundedReducer';

const store = configureStore({
    reducer: {
        notification: notificationReducer,
        user: userReducer,
        userFounded: userFoundedReducer,
        blog: blogReducer,
        blogFounded: blogFoundedReducer
    }
});


export default store;