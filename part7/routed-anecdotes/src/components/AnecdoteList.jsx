import { Link } from "react-router-dom";

const AnecdoteList = ({ anecdotes }) => (
  <div className="mb-2">
    <h2 className="text-green-700 font-bold">Anecdotes</h2>
    <ul className="list-decimal flex-col inline-flex gap-2">
      {anecdotes.map((anecdote) => (
        <Link
          className="p-1 border rounded-md bg-green-200 text-green-700 border-green-400"
          key={anecdote.id}
          to={`/anecdotes/${anecdote.id}`}
        >
          {anecdote.content}
        </Link>
      ))}
    </ul>
  </div>
);

export default AnecdoteList;
