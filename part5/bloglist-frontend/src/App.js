import { useState, useEffect } from 'react';
import Blog from './components/Blog';
import Login from './components/Login';
import blogService from './services/blogs';
import Header from './components/Header';
import Togglable from './components/Togglable';
import AddBlog from './components/AddBlog';
import 'remixicon/fonts/remixicon.css';
import { BounceLoader } from 'react-spinners';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLoginSuccess = (user) => {
    setUser(user);
  };

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const blogs = await blogService.getAll();
      setBlogs(blogs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const blogDelete = async (id) => {
    try {
      setLoading(true);
      await blogService.deleteBlog(id);
    } catch (error) {
      console.log(error);
    } finally {
      await fetchBlogs();
    }
  };

  const blogLike = async (id) => {
    try {
      setLoading(true);
      await blogService.likeBlog(id);
    } catch (error) {
      console.log(error);
    } finally {
      await fetchBlogs();
    }
  };

  useEffect(() => {
    if (user) fetchBlogs();
  }, [user]);

  const renderBlogs = () => {
    return blogs
      .sort((a, b) => b.likes - a.likes)
      .map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBlogDelete={blogDelete}
          handleBlogLike={blogLike}
        />
      ));
  };

  const handleAddBlog = async (blog) => {
    try {
      setLoading(true);
      await blogService.addBlog(blog);
    } catch (e) {
      console.log(e);
    } finally {
      await fetchBlogs();
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem('userToken');
    setUser(null);
    setBlogs([]);
  };

  return (
    <div className="w-screen h-screen bg-gray-200 overflow-hidden">
      <Header user={user} handleLogout={handleLogout} />
      <div className="flex flex-col justify-center items-center">
        {!user && <Login handleLoginSuccess={handleLoginSuccess} />}
        <div className="flex flex-row gap-2 flex-wrap  items-start">
          {renderBlogs()}
        </div>
        <Togglable buttonLabel={'add blog'} user={user} blogs={blogs}>
          <AddBlog handleAddBlog={handleAddBlog} />
        </Togglable>
      </div>
      {loading && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-50 flex justify-center items-center">
          <div className="text-center">
            <BounceLoader color="#36d7b7" />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
