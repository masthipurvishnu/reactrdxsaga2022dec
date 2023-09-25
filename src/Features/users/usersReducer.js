const initialState = {};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS_REQUEST_SUCCESS":
      return {
        ...state,
        users: action.users,
      };

    case "USERS_REQUEST_FAILURE":
      return {
        ...state,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};
export default usersReducer;
