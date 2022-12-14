import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0]);

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const voteAnecdote = () => {
    const copy = [...vote];

    copy[selected] += 1;

    setVote(copy);
  };

  const mostVotedAnectdote = () => {
    return anecdotes[vote.findIndex((e) => e === Math.max(...vote))];
  };

  return (
    <div>
      <h1> Anecdote of the day </h1>
      {anecdotes[selected]}
      <p>has {vote[selected]} votes</p>
      <div>
        <button onClick={nextAnecdote}>next anecdote</button>
        <button onClick={voteAnecdote}>vote anecdote</button>
      </div>
      <div>
        <h1> Anecdote with most votes: </h1>
        {mostVotedAnectdote()}
      </div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const root = createRoot(document.getElementById("root"));

root.render(<App anecdotes={anecdotes} />);
