export default function(state = "", action = {}) {
  switch (action.type) {
    case "NEW_LOGIN": {
      return action.payload;
    }
    case "NEW_SIGNUP": {
      console.log(action.payload);
      return state;
    }
    default:
      return state;
  }
}
