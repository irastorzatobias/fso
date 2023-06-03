import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getUser } from '../reducers/userFoundedReducer';

const User = () => {
    const id = useParams().id;
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userFounded);

    useEffect(() => {
        dispatch(getUser(id));
    }, []);

    const buildBlogs = () => {
        return user.blogs.map((blog) => (
            <li className="text-teal-500 rounded-sm cursor-pointer" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>- {blog.title}</Link>
            </li>
        ));
    };

    return (user &&
        <div className="m-1 flex flex-col gap-2 border-green-700 border p-0.5 rounded-md">
            <div className="font-bold">
                <h1>name: {user.name} </h1>
                <h1>username: {user.username} </h1>
            </div>
            <h1 className="bg-teal-500 text-white font-medium">BLOGS</h1>
            <ul className="flex flex-col gap-1 text-white font-medium">
                {buildBlogs()}
            </ul>
        </div>
    );
};

export default User;
