import blogService from "../services/blogs";
import { useState } from "react";

const Blog = ({ blog, key }) => {
  const [viewAll, setViewAll] = useState(false);
  console.log(blog);

  const handleBlogDelete = async () => {
    await blogService.deleteBlog(blog.id);
  };

  const handleLikeBlog = async () => {
    await blogService.likeBlog(blog.id);
  };

  const deleteIconClass = `${!viewAll ? "ri-eye-line" : "ri-eye-off-line"}`;

  return (
    <div className="border border-teal-500 p-1 truncate shadow-lg mb-3 rounded-md flex gap-3">
      <div className="text-sm">
        <p>"{blog.title}"</p>
        <p class="italic font-semibold ">{blog.author}</p>
        {viewAll && (
          <div className="flex flex-col">
            <a href={blog.url}>{blog.url}</a>
            <p className="font-semibold ">{blog.user.name}</p>
            <div className="flex flex-row justify-between items-center">
              <p className="text-green-500 font-bold">{blog.likes} likes </p>
              <i class="ri-thumb-up-line" onClick={handleLikeBlog}/>
            </div>
          </div>
        )}
        <div class="flex flex-row justify-between mt-1">
          <i class="ri-delete-bin-7-fill" onClick={handleBlogDelete} />
          <i className={deleteIconClass} onClick={() => setViewAll(!viewAll)} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
