import noteService from "../services/anecdotes";

const reducer = (state = [], action) => {
  console.log("state now: ", state);
  console.log("action", action);
  switch (action.type) {
    case "VOTE":
      const id = action.data.id;
      const anecdoteToChange = state.find((anecdote) => anecdote.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    case "ADD_NEW":
      let newAnecdote = action.data;
      return [...state, newAnecdote];
    case "INIT":
      return action.data;
    default:
      return state;
  }
};

export function vote(id, anecdote) {
  return {
    type: "VOTE",
    data: { id },
    content: anecdote,
  };
}

export function addNewAnecdote(anecdote) {
  return async function (dispatch) {
    let anecdoteObject = await noteService.create(anecdote);
    dispatch({
      type: "ADD_NEW",
      data: anecdoteObject,
    });
  };
}

export function initialiseAnecdotes() {
  return async function (dispatch) {
    let anecdotes = await noteService.getAll();
    dispatch({
      type: "INIT",
      data: anecdotes,
    });
  };
}

export default reducer;
