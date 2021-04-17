import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";

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

function AnecdoteList() {
  const filter = useSelector(({ filter }) => filter);
  const anecdotes = useSelector(({ anecdotes }) =>
    anecdotes
      .sort(sortByVotes)
      .filter((anecdote) => anecdote.content.includes(filter))
  );
  const dispatch = useDispatch();

  const handleVote = (id) => {
    dispatch(vote(id));
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default AnecdoteList;
