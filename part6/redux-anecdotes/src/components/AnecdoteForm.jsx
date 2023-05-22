import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  notificationSetter,
} from "../store/reducers/notificationReducer";
import { createAnecdote } from "../store/reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const [anecdote, setAnecdote] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const anecdoteObject = {
      content: anecdote,
      votes: 0,
    };

    dispatch(createAnecdote(anecdoteObject));
    dispatch(notificationSetter("you created an anecdote"));

    setAnecdote("");
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
            className="border-indigo-700 border rounded-md text-black"
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
