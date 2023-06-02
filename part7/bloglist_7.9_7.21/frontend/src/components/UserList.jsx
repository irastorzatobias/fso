import { useEffect, useState } from 'react';
import user from '../services/user';
import User from './User';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await user.getUsers();
            setUsers(res);
        }

        fetchData();
    }, []);

    return (
        <div className="flex flex-row gap-2">
            {/* {users && users.map((user, index) =>
                <User key={index} name={user.name} username={user.username} blogs={user.blogs}/>
            )} */}
            <table className="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
              User
                        </th>
                        <th scope="col" className="px-6 py-3">
              Blogs
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
            users.map((user, index) => (
                <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer">
                        <Link to={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </th>
                    <td className="px-6 py-4">
                        {user.blogs.length}
                    </td>
                </tr>
            ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
