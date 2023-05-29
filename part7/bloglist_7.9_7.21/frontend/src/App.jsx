import { useState, useEffect } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Togglable from './components/Togglable';
import AddBlog from './components/AddBlog';
import 'remixicon/fonts/remixicon.css';
import { BounceLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from './reducers/blogReducer';
import BlogList from './components/BlogList';
import { removeUser } from './reducers/userReducer';

const App = () => {
    const user = useSelector(state => state.user);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            setLoading(true);
            dispatch(getBlogs());
            setLoading(false);
        }
    }, [user]);

    const handleLogout = () => {
        window.localStorage.removeItem('userToken');
        dispatch(removeUser());
    };

    return (
        <div className="w-screen h-screen bg-gray-200 overflow-hidden">
            <ToastContainer />
            <Header user={user} handleLogout={handleLogout} />
            <div className="flex flex-col justify-center items-center">
                {!user && <Login />}
                <div className="flex flex-row gap-2 flex-wrap  items-start">
                    {user && <BlogList/>}
                </div>
                <Togglable buttonLabel={'add blog'} user={user}>
                    <AddBlog />
                </Togglable>
            </div>
            {loading && (
                <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-50 flex justify-center items-center">
                    <div className="text-center">
                        <BounceLoader color="#36d7b7" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
