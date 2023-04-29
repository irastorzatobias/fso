var _ = require("lodash");

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  return !blogs.length
    ? null
    : blogs.reduce(
        (maxVal, blog) => (blog.likes > maxVal ? blog : maxVal),
        blogs[0]
      );
};

const mostBlogs = (blogs) => {
  if (!blogs.length) return null;

  const groupedBlogs = _.groupBy(blogs, "author");
  const authorsWithBlogs = _.map(groupedBlogs, (blog, author) => {
    return {
      author: author,
      blogs: blog.length,
    };
  });

  return _.maxBy(authorsWithBlogs, "blogs");
};

const mostLikes = (blogs) => {
  if (!blogs.length) return null;

  const groupedBlogs = _.groupBy(blogs, "author");
  const totalLikesPerAuthor = _.map(groupedBlogs, (blog, author) => {
    return {
        author: author,
        likes: _.sumBy(blog, "likes")
    }
  });

    return _.maxBy(totalLikesPerAuthor, "likes");
};

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes };
