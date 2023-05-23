import { useMutation, useQueryClient } from "react-query";
import { submitAnecdote } from "../services/anecdoteService";
import { useNotificationDispatch } from "../contexts/NotificationContext";
import {
  resetNotification,
  setNotification,
} from "../actions/notificationActions";

const AnecdoteForm = () => {
  const dispatch = useNotificationDispatch();

  const queryClient = useQueryClient();

  const newAnecdoteMutation = useMutation(submitAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries("anecdotes");
    },
    onError: () => {
      dispatch(setNotification("too short, must have 5 characters length"));
      setTimeout(() => {
        dispatch(resetNotification());
      }, 1500);
    },
  });

  const onCreate = (event) => {
    event.preventDefault();

    let inputText = event.target.anecdote.value;
    const content = inputText.trim();

    newAnecdoteMutation.mutate({ content, votes: 69 });

    dispatch(setNotification("created anecdote"));
    setTimeout(() => {
      dispatch(resetNotification());
    }, 1500);

    inputText = "";
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
