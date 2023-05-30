import { useEffect, useState } from 'react';
import  user  from '../services/user';
import User from './User';

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
            {users && users.map((user, index) =>
                <User key={index} name={user.name} username={user.username} blogs={user.blogs}/>
            )}
        </div>
    );
};

export default UserList;
