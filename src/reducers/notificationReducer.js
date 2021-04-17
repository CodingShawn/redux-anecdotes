const initialNotification = "";

function reducer(state = initialNotification, action) {
  switch (action.type) {
    case "VOTE":
      return `You voted for '${action.data.content}'`;
    case "ADD_NEW":
      return `You added '${action.data.content}'`;
    case "REMOVE_NOTIFICATION":
      return "";
    default:
      return state;
  }
}

export function removeNotification() {
  return {
    type: "REMOVE_NOTIFICATION",
  };
}

export default reducer;
