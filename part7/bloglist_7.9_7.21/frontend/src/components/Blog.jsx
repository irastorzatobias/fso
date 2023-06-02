import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { likeBlog, removeBlog } from '../reducers/blogReducer';

const Blog = ({ blog }) => {
    const [viewAll, setViewAll] = useState(false);
    const dispatch = useDispatch();

    const deleteIconClass = `${!viewAll ? 'ri-eye-line' : 'ri-eye-off-line'}`;

    const handleRemove = async (id) => {
        await dispatch(removeBlog(id));
    };

    const handleLike = async (id) => {
        await dispatch(likeBlog(id));
    };

    return (
        <div className="border border-teal-500 p-1 truncate shadow-lg mb-3 rounded-md flex gap-3">
            <div className="text-sm">
                <p>{blog.title}</p>
                <p className="italic font-semibold">{blog.author}</p>
                <p className="font-semibold text-indigo-700">Created by: {blog.user.username}</p>
                {viewAll && (
                    <div className="flex flex-col">
                        <a href={blog.url}>{blog.url}</a>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-green-500 font-bold">{blog.likes} likes </p>
                            <i className="ri-thumb-up-line" onClick={() => handleLike(blog.id)} />
                        </div>
                    </div>
                )}
                <div className="flex flex-row justify-between mt-1">
                    <i className="ri-delete-bin-7-fill" onClick={() => handleRemove(blog.id)} />
                    <i className={deleteIconClass} onClick={() => setViewAll(!viewAll)} />
                </div>
            </div>
        </div>
    );
};

export default Blog;
