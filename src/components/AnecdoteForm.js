import { useDispatch } from "react-redux";
import { addNewAnecdote } from "../reducers/anecdoteReducer";

function AnecdoteForm() {
  const dispatch = useDispatch();

  function handleAddNewAnecdote(event) {
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(addNewAnecdote(anecdote));
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleAddNewAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
}

export default AnecdoteForm;
