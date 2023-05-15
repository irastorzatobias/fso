import { useSelector, useDispatch } from "react-redux";
import voteAction from "./actions/voteAction";
import AnecdoteForm from "./components/AnecdoteForm";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteAction(id));
  };

  return (
    <div>
      <h2 className="text-red-500">Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id} className="flex flex-row items-center gap-2">
          <div>{anecdote.content}</div>
          <div class='space-x-1'>
            has {anecdote.votes}
            <button
              onClick={() => vote(anecdote.id)}
              className="bg-indigo-200 text-indigo-700 px-1 rounded-md"
            >
              vote
            </button>
          </div>
        </div>
      ))}

      <AnecdoteForm />
    </div>
  );
};

export default App;
