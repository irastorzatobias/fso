import { useState } from "react";
import Menu from "./components/Menu";
import AnecdoteList from "./components/AnecdoteList";
import About from "./components/About";
import CreateNew from "./components/CreateNew";
import Footer from "./components/Footer";
import Anecdote from "./components/Anecdote";
import Notification from "./components/Notification";

import { Route, Routes, useMatch } from "react-router-dom";

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: 1,
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: 2,
    },
  ]);

  const match = useMatch("/anecdotes/:id");
  const anecdote = match
    ? anecdotes.find((a) => a.id === Number(match.params.id))
    : null;

  const [notification, setNotification] = useState("");

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    setNotification(`A new anecdote ${anecdote.content} created!`);
    clearNotification();
  };

  const clearNotification = () => {
    setTimeout(() => {
      setNotification("");
    }, 1500);
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  return (
    <div className="m-1">
      <h1 className="text-xl font-bold mb-1">Software anecdotes</h1>
      <Menu />
      {notification.trim() !== "" && <Notification text={notification} />}
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/create" element={<CreateNew addNew={addNew} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/anecdotes/:id"
          element={<Anecdote anecdote={anecdote} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
