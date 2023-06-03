import Login from './components/Login';
import Header from './components/Header';
import UserList from './components/UserList';
import 'remixicon/fonts/remixicon.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import BlogList from './components/BlogList';
import { Route, Routes } from 'react-router-dom';
import User from './components/User';
import Loading from './components/Loading';
import { useEffect } from 'react';
import { initUser } from './reducers/userReducer';
import Blog from './components/Blog';

const App = () => {
    const loading = useSelector(state => state.blog.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initUser());
    }, []);

    return (
        <div className="w-screen h-screen bg-gray-200 overflow-hidden">
            <ToastContainer />
            <Header />
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/blogs' element={<BlogList/>} />
                <Route path='/blogs/:id' element={<Blog />} />
                <Route path='/users' element={<UserList/>} />
                <Route path='/users/:id' element={<User/>} />
            </Routes>
            {loading && <Loading/>}
        </div>
    );
};

export default App;
