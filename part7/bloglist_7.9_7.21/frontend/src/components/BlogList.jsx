import { useSelector } from 'react-redux';
import Blog from './Blog';

const BlogList = () => {
    const blogState = useSelector(state => state.blog.blogs);

    return blogState.map((blog) => (
        <Blog
            key={blog.id}
            blog={blog}
        />
    ));
};

export default BlogList;