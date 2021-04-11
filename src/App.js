import React from "react";
import { useSelector, useDispatch } from "react-redux";

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

  const vote = (id) => {
    dispatch({
      type: "VOTE",
      data: { id },
    });
  };

  function addNewAnecdote(event) {
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch({
      type: "ADD_NEW",
      data: {
        content: anecdote,
        votes: 0,
        id: getId(),
      },
    });
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={addNewAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
