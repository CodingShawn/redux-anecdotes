import noteService from "../services/anecdotes";

const reducer = (state = [], action) => {
  console.log("state now: ", state);
  console.log("action", action);
  switch (action.type) {
    case "VOTE":
      const changedAnecdote = action.data;
      const id = changedAnecdote.id;
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

export function vote(id) {
  return async function (dispatch) {
    let anecdoteObject = await noteService.vote(id);
    dispatch({
      type: "VOTE",
      data: anecdoteObject,
    });
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
