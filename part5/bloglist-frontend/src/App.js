import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import Login from "./components/Login";
import blogService from "./services/blogs";
import Header from "./components/Header";
import Togglable from "./components/Togglable";
import AddBlog from "./components/AddBlog";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (user) => {
    setUser(user);
  };

  const fetchBlogs = async () => {
    const blogs = await blogService.getAll();
    setBlogs(blogs);
  };

  useEffect(() => {
    if (user) fetchBlogs();
  }, [user]);

  const renderBlogs = () => {
    return blogs
      .sort((a, b) => b.likes - a.likes)
      .map((blog) => <Blog key={blog.id} blog={blog} />);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("userToken");
    setUser(null);
    setBlogs([]);
  };

  return (
    <div className="w-screen h-screen bg-gray-200">
      <Header user={user} handleLogout={handleLogout} />
      <div className="flex flex-col justify-center items-center">
        {!user && <Login handleLoginSuccess={handleLoginSuccess} />}
        <div className="flex flex-row gap-2 flex-wrap  items-start">
          {renderBlogs()}
        </div>
        <Togglable buttonLabel={"add blog"} user={user}>
          <AddBlog />
        </Togglable>
      </div>
    </div>
  );
};

export default App;
