import { createSlice } from "@reduxjs/toolkit";
import { getAll, submitAnecdote, vote } from "../../services/anecdoteService";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    voteAnecdote: (state, action) => {
      const id = action.payload;
      const anecdoteToChange = state.find((a) => a.id === id);

      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };

      return state.map((a) => (a.id !== id ? a : changedAnecdote));
    },
    addAnecdote: (state, action) => {
      const content = action.payload;
      state.push(content);
    },

    setAnecdotes: (state, action) => {
      return action.payload;
    },
  },
});

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    await submitAnecdote(content);
    dispatch(addAnecdote(content));
  };
};

export const voteAnecdoteThunk = (id) => {
  return async (dispatch) => {
    await vote(id);
    dispatch(voteAnecdote(id));
  };
 };

export const { addAnecdote, voteAnecdote, setAnecdotes } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
