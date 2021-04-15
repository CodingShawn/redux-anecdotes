import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

async function getAll() {
  const response = await axios.get(baseUrl);
  return response.data;
}

async function create(anecdote) {
  let object = { content: anecdote, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
}

export default { getAll, create };
