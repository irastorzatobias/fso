import { useState } from "react";
import blogService from "../services/blogs";

const AddBlog = ({ handleAddBlog }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await blogService.addBlog({ title, author, url });

    setTitle("");
    setAuthor("");
    setUrl("");
  };

  return (
    <form className="w-[40vw] mb-1 mx-auto" onSubmit={handleSubmit}>
      <div class="flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          className="p-2 rounded-md mb-2"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="author">Author</label>
        <input
          className="p-2 rounded-md mb-2"
          type="text"
          value={author}
          onChange={handleAuthorChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="url">Url</label>
        <input
          className="p-2 rounded-md mb-2"
          type="text"
          value={url}
          onChange={handleUrlChange}
        />
      </div>
      <button
        className="bg-green-500 rounded-md p-0.5 w-full mt-2"
        type="submit"
      >
        add
      </button>
    </form>
  );
};

export default AddBlog;
