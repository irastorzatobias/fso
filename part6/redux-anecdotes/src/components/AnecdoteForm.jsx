import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAnecdote } from "../store/reducers/anecdoteReducer";
import { removeNotification, setNotification } from "../store/reducers/notificationReducer";

const AnecdoteForm = () => {
  const [anecdote, setAnecdote] = useState("");
  const dispatch = useDispatch();

  const getId = () => (100000 * Math.random()).toFixed(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const anecdoteObject = {
      content: anecdote,
      id: getId(),
      votes: 0,
    };

    dispatch(addAnecdote(anecdoteObject));
    dispatch(setNotification('you created an anecdote'));
    setAnecdote("");

    setTimeout(() => {
      dispatch(removeNotification())
    }, 2000);
  };

  const handleChange = (e) => {
    setAnecdote(e.target.value);
  };

  return (
    <div className="p-1 border-2 w-1/4 m-1 rounded-md">
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={anecdote}
            onChange={handleChange}
            className="border-indigo-700 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-green-200 text-green-700 px-1 mt-1 rounded-md hover:bg-green-700 hover:text-green-200 transition-all ease-in duration-200"
        >
          create
        </button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
