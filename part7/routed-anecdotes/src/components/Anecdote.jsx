const Anecdote = ({ anecdote }) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-green-700 font-bold">{anecdote.author}</h1>
      <p>{anecdote.content}</p>
      <p className="p-1 border rounded-md text-indigo-700 bg-indigo-200 w-1/6">
        has {anecdote.votes} votes
      </p>
      <div>
        <span className="p-1 border rounded-md text-amber-700 bg-amber-200">
          for more info see {anecdote.info}
        </span>
      </div>
    </div>
  );
};

export default Anecdote;
