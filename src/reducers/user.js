export default function(
  state = {
    user: "",
    errors: ""
  },
  action = {}
) {
  switch (action.type) {
    case "NEW_LOGIN": {
      console.log(action);
      return { ...state, user: action.payload };
    }
    case "NEW_SIGNUP": {
      return state;
    }
    case "BAD_LOGIN": {
      return { ...state, errors: action.payload };
    }
    default:
      return state;
  }
}
