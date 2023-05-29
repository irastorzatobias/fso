import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { likeBlog, removeBlog } from '../reducers/blogReducer';
import { toast } from 'react-toastify';

const Blog = ({ blog }) => {
    const [viewAll, setViewAll] = useState(false);
    const dispatch = useDispatch();

    const deleteIconClass = `${!viewAll ? 'ri-eye-line' : 'ri-eye-off-line'}`;

    const handleRemove = async (id) => {
        const res = await dispatch(removeBlog(id));
        if (res.code === 'ERR_BAD_REQUEST') {
            toast.error('Error removing blog, please reload', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        }
    };

    return (
        <div className="border border-teal-500 p-1 truncate shadow-lg mb-3 rounded-md flex gap-3">
            <div className="text-sm">
                <p>{blog.title}</p>
                <p className="italic font-semibold ">{blog.author}</p>
                {viewAll && (
                    <div className="flex flex-col">
                        <a href={blog.url}>{blog.url}</a>
                        <p className="font-semibold ">{blog.user.name}</p>
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-green-500 font-bold">{blog.likes} likes </p>
                            <i className="ri-thumb-up-line" onClick={() => dispatch(likeBlog(blog.id))} />
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
