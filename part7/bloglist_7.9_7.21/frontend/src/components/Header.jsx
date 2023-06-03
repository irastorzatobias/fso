import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../reducers/userReducer';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    };

    return (
        <div className="bg-teal-500 flex flex-row justify-between items-center px-2  py-1 mb-3">
            <div className="space-x-2">
                <Link to="/blogs" className="text-white font-bold text-xl active:border">
                    blogs
                </Link>
                <Link to="/users" className="text-white font-bold text-xl">
                    users
                </Link>
            </div>
            {user && (
                <div className="flex flex-col">
                    <p>logged in as {user.name}</p>
                    <button
                        onClick={handleLogout}
                        className="p-1 border-1 bg-red-500 rounded-md text-white"
                    >
                        log out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
