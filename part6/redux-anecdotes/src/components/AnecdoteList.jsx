import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote, voteAnecdoteThunk } from "../store/reducers/anecdoteReducer";
import {
  removeNotification,
  setNotification,
} from "../store/reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filter = useSelector((state) => state.filter);

  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  );

  const displayedAnecdotes = filter === "" ? anecdotes : filteredAnecdotes;

  const dispatch = useDispatch();

  const handleVote = (id) => {
    dispatch(voteAnecdoteThunk(id));
    dispatch(setNotification("you voted an anecdote!"));

    setTimeout(() => {
      dispatch(removeNotification());
    }, 2000);
  };

  return (
    <div>
      {displayedAnecdotes.map((anecdote) => (
        <div
          key={anecdote.id}
          className="flex flex-row items-center gap-2 border w-3/4  mb-2 p-1 font-bold justify-between"
        >
          <div>{anecdote.content}</div>
          <div className="flex flex-row justify-center items-center">
            <div className="text-green-300">{anecdote.votes}</div>
            <button
              onClick={() => handleVote(anecdote.id)}
              className="bg-indigo-200 text-indigo-700 px-1 rounded-md ml-2"
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
