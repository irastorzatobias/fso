import { useDispatch, useSelector } from 'react-redux';
import Blog from './Blog';
import { useEffect } from 'react';
import { getBlogs } from '../reducers/blogReducer';
import AddBlog from './AddBlog';

const BlogList = () => {
    const blogState = useSelector((state) => state.blog.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogs());
    }, []);

    const renderBlogs = () => {
        return blogState.map((blog) => <Blog key={blog.id} blog={blog} />);
    };

    return (
        <div className="flex flex-col w-[66vw] mx-auto">
            {renderBlogs()}
            <AddBlog />
        </div>
    );
};

export default BlogList;
