import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateNew = (props) => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content,
      author,
      info,
      votes: 0,
    });

    navigate("/");
  };

  return (
    <div>
      <h2 className="font-medium text-indigo-700">create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input
            className="border border-indigo-400 rounded-md ml-1 mt-1"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          author
          <input
            className="border border-indigo-400 rounded-md ml-1 mt-1"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          url for more info
          <input
            className="border border-indigo-400 rounded-md ml-1 mt-1"
            name="info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <button
          className="p-1 border rounded-lg bg-green-200 text-green-700 hover:bg-green-700 
        hover:text-green-200 transition-all ease-in duration-75"
        >
          create
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
