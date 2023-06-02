import { Link, Route, Routes } from 'react-router-dom';
import UserList from './UserList';

const Header = ({ user, handleLogout }) => {
    return (
        <div className="bg-teal-500 flex flex-row justify-between items-center px-2  py-1 mb-3">
            <Link to="/users" className="text-white font-bold text-xl">
                Users
            </Link>
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
