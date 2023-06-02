import { useState, useEffect } from 'react';
import login from '../services/login';
import { useDispatch } from 'react-redux';
import { setUser } from '../reducers/userReducer';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const user = await login.userLogin(username, password);
        if (user.error) {
            alert(user.error);
            return;
        }

        const token = user.token;

        window.localStorage.setItem('userToken', token);
        dispatch(setUser(user));
    };

    return (
        <div className="flex flex-col border rounded-md border-teal-500 w-1/2 bg-gray-100 mx-auto">
            <h1 className="text-lg font-bold border-red-500 mb-2 text-center">
        Sign in
            </h1>
            <form onSubmit={handleLogin} className="flex flex-col p-2 gap-1">
                <label className="text-sm font-semibold text-teal-500">Username</label>
                <input
                    type="text"
                    placeholder="name here"
                    className="border font-medium border-gray-200 rounded-lg p-1 text-sm w-full"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <label className="text-sm font-semibold text-teal-500">Password</label>
                <input
                    type="password"
                    placeholder="********"
                    className="border font-medium border-gray-200 rounded-lg p-1 text-sm w-full"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button
                    className="bg-teal-500 text-white rounded-lg p-1 mt-2 w-full mx-auto"
                    type="submit"
                >
          Sign in
                </button>
            </form>
        </div>
    );
};

export default Login;
