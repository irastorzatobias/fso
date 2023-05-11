import { useState } from 'react';

const Blog = ({ blog, handleBlogDelete, handleBlogLike }) => {
  const [viewAll, setViewAll] = useState(false);

  const blogDelete = () => {
    handleBlogDelete(blog.id);
  };

  const blogLike = () => {
    handleBlogLike(blog.id);
  };

  const deleteIconClass = `${!viewAll ? 'ri-eye-line' : 'ri-eye-off-line'}`;

  return (
    <div className="border border-teal-500 p-1 truncate shadow-lg mb-3 rounded-md flex gap-3">
      <div className="text-sm">
        <p>"{blog.title}"</p>
        <p className="italic font-semibold ">{blog.author}</p>
        {viewAll && (
          <div className="flex flex-col">
            <a href={blog.url}>{blog.url}</a>
            <p className="font-semibold ">{blog.user.name}</p>
            <div className="flex flex-row justify-between items-center">
              <p className="text-green-500 font-bold">{blog.likes} likes </p>
              <i className="ri-thumb-up-line" onClick={blogLike} />
            </div>
          </div>
        )}
        <div className="flex flex-row justify-between mt-1">
          <i className="ri-delete-bin-7-fill" onClick={blogDelete} />
          <i className={deleteIconClass} onClick={() => setViewAll(!viewAll)} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
