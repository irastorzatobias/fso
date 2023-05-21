import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const submitAnecdote = async (anecdote) => {
  await axios.post(baseUrl, anecdote);
};

const vote = async (id) => {
  const anecdoteFounded = await axios.get(`${baseUrl}/${id}`);
  await axios.put(`${baseUrl}/${id}`, {
    ...anecdoteFounded.data,
    votes: anecdoteFounded.data.votes + 1,
  });
};

export { getAll, submitAnecdote, vote };
