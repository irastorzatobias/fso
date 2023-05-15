import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";

const App = () => {
  return (
    <div>
      <h2 className="text-red-500">Anecdotes</h2>
      <AnecdoteList />

      <AnecdoteForm />
    </div>
  );
};

export default App;
