import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../store/reducers/anecdoteReducer";
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

  const vote = (id) => {
    dispatch(voteAnecdote(id));
    dispatch(setNotification("you voted an anecdote!"));

    setTimeout(() => {
      dispatch(removeNotification());
    }, 2000);
  };

  return (
    <div>
      {displayedAnecdotes.map((anecdote) => (
        <div key={anecdote.id} className="flex flex-row items-center gap-2">
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() => vote(anecdote.id)}
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
