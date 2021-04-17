const initialNotification = "";

// Already tie in notifications action type with other actions -> Only use one
// extra action to remove notifications
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

// export function setNotification(message, time) {
//   return async function (dispatch) {
//     dispatch({
//       type: "NEW_MESSAGE",
//       data: {
//         content: message
//       }
//     })
//     setTimeout(() => {
//       dispatch(removeNotification())
//     }, time)
//   }
// }

export default reducer;
