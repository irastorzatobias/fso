import { useNavigate } from "react-router-dom";
import useField from "../hooks/fieldHook";

const CreateNew = (props) => {
  const content = useField();
  const author = useField();
  const info = useField();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });

    navigate("/");
  };

  const reset = () => {
    content.reset();
    author.reset();
    info.reset();
  }

  return (
    <div>
      <h2 className="font-medium text-indigo-700">create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input
            className="border border-indigo-400 rounded-md ml-1 mt-1"
            {...content}
          />
        </div>
        <div>
          author
          <input
            className="border border-indigo-400 rounded-md ml-1 mt-1"
            {...author}
          />
        </div>
        <div>
          url for more info
          <input
            className="border border-indigo-400 rounded-md ml-1 mt-1"
            {...info}
          />
        </div>
        <div>
          <button
            className="p-1 border rounded-lg bg-green-200 text-green-700 hover:bg-green-700 
          hover:text-green-200 transition-all ease-in duration-75"
          >
            create
          </button>
          <button
            type="reset"
            className="p-1 border rounded-lg bg-red-200 text-red-700 hover:bg-red-700
          hover:text-red-200 transition-all ease-in duration-75"
            onClick={reset}
          >
            reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNew;
