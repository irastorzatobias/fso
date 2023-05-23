import { useMutation, useQuery, useQueryClient } from "react-query";
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import { getAll, vote } from "./services/anecdoteService";
import { useNotificationDispatch } from "./contexts/NotificationContext";
import { setNotification } from "./actions/notificationActions";

const App = () => {
  const queryClient = useQueryClient();
  const dispatch = useNotificationDispatch();

  const anecdoteVoteMutation = useMutation(vote, {
    onSuccess: () => {
      queryClient.invalidateQueries("anecdotes");
    },

    onError: () => {
      dispatch(setNotification(`error while voting`));

      setTimeout(() => {
        dispatch(setNotification(""));
      }, 1500);
    },
  });

  const handleVote = (anecdote) => {
    anecdoteVoteMutation.mutate(anecdote.id);
    dispatch(setNotification(`you voted '${anecdote.content}'`));

    setTimeout(() => {
      dispatch(setNotification(""));
    }, 1500);
  };

  const anecdotes = useQuery("anecdotes", getAll, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      {anecdotes.isLoading && <div>Loading...</div>}
      {anecdotes.isError && <div>Error</div>}
      {anecdotes.isSuccess && (
        <>
          <h3>Anecdote app</h3>
          <Notification />
          <AnecdoteForm />

          {anecdotes.data.map((anecdote) => (
            <div key={anecdote.id}>
              <div>{anecdote.content}</div>
              <div>
                has {anecdote.votes}
                <button onClick={() => handleVote(anecdote)}>vote</button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default App;
