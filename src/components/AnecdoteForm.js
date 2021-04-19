import { connect } from "react-redux";
import { addNewAnecdote } from "../reducers/anecdoteReducer";

function AnecdoteForm(props) {
  function handleAddNewAnecdote(event) {
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = "";
    props.addNewAnecdote(anecdote);
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

const mapDispatchToProps = {
  addNewAnecdote,
};

const connectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm);

export default connectedAnecdoteForm;
