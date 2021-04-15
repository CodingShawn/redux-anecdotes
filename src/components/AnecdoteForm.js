import { useDispatch } from "react-redux";
import { addNewAnecdote } from "../reducers/anecdoteReducer";
import noteService from "../services/anecdotes";

function AnecdoteForm() {
  const dispatch = useDispatch();

  async function handleAddNewAnecdote(event) {
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = "";
    let anecdoteObject = await noteService.create(anecdote);
    console.log(anecdoteObject);
    dispatch(addNewAnecdote(anecdoteObject));
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
