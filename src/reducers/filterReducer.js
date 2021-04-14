const initialState = "";

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_FILTER":
      return action.data;
    default:
      return state;
  }
}

export function updateFilter(filter) {
  return {
    type: "UPDATE_FILTER",
    data: filter,
  };
}

export default reducer;
