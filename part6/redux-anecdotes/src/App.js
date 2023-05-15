import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();
  const [anecdote, setAnecdote] = useState("");

  const getId = () => (100000 * Math.random()).toFixed(0);

  const vote = (id) => {
    const action = {
      type: "VOTE",
      id: id,
    };

    dispatch(action);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const anecdoteObject = {
      content: anecdote,
      id: getId(),
      votes: 0,
    };

    const addAction = {
      type: "ADD",
      content: anecdoteObject,
    };

    dispatch(addAction);
  };

  const handleChange = (e) => {
    setAnecdote(e.target.value);
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input value={anecdote} onChange={handleChange} />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
