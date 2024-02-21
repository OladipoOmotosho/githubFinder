const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        loading: false,
      };

    case "SET_LOADIING":
      return {
        loading: true,
      };

    default:
      return state;
  }
};

export default githubReducer;
