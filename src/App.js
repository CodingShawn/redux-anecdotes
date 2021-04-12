import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { vote } from "./reducers/anecdoteReducer";
import AnecdoteForm from "./components/AnecdoteForm";

const getId = () => (100000 * Math.random()).toFixed(0);

function sortByVotes(a, b) {
  // Want to have higher votes on left side of array
  if (a.votes < b.votes) {
    return 1;
  }
  if (a.votes > b.votes) {
    return -1;
  }
  return 0;
}

const App = () => {
  const anecdotes = useSelector((state) => state.sort(sortByVotes));
  const dispatch = useDispatch();

  const handleVote = (id) => {
    dispatch(vote(id));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <AnecdoteForm/>
    </div>
  );
};

export default App;
