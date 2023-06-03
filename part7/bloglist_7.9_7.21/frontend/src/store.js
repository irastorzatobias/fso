import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './reducers/notificationReducer';
import userReducer from './reducers/userReducer';
import blogReducer from './reducers/blogReducer';
import userFoundedReducer from './reducers/userFoundedReducer';

const store = configureStore({
    reducer: {
        notification: notificationReducer,
        user: userReducer,
        userFounded: userFoundedReducer,
        blog: blogReducer
    }
});


export default store;