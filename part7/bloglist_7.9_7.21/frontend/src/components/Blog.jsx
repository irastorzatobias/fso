import {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeBlog, removeBlog } from '../reducers/blogReducer';
import { useParams } from 'react-router-dom';
import { toastError, toastSuccess } from '../helpers';
import { findBlog } from '../reducers/blogFoundedReducer';

const Blog = ({ blog }) => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const blogById = useSelector(state => state.blogFounded);

    const [viewAll, setViewAll] = useState(false);

    useEffect(() => {
        if(id) {
            (async () => {
                await dispatch(findBlog(id));
            })();
        }
    }, []);

    const viewBlog = blogById ? blogById : blog;



    const showIconClass = `${!viewAll ? 'ri-eye-line ri-lg' : 'ri-eye-off-line ri-lg'}`;

    const handleRemove = async (id) => {
        await dispatch(removeBlog(id));
    };

    const handleLike = async (id) => {
        try {
            await dispatch(likeBlog(id));
        } catch (e) {
            toastError(e);
        } finally {
            toastSuccess(`You liked ${blog.title}`);
        }
    };

    return (viewBlog &&
        <div className="border border-teal-500 p-1 truncate shadow-lg mb-3 rounded-md gap-3 w-[80%] mx-auto">
            <div className="text-sm flex w-full justify-between">
                <div className='flex flex-col'>
                    <p className='uppercase'>{viewBlog.title}</p>
                    <p className="italic font-semibold">{viewBlog.author}</p>
                    <p className="font-semibold text-indigo-700">Created by: {viewBlog.user.username}</p>
                    {viewAll && (
                        <div>
                            <a href={viewBlog.url}>{viewBlog.url}</a>
                            <p className="text-green-500 font-bold">{viewBlog.likes} likes </p>
                        </div>
                    )}
                </div>
                <div className="flex flex-row mt-1 justify-center gap-2">
                    <i className="ri-delete-bin-7-fill cursor-pointer ri-lg" onClick={() => handleRemove(viewBlog.id)} />
                    <i className={showIconClass} onClick={() => setViewAll(!viewAll)} />
                    <i className="ri-thumb-up-fill ri-lg" onClick={() => handleLike(viewBlog.id)} />
                </div>
            </div>
        </div>
    );
};

export default Blog;
