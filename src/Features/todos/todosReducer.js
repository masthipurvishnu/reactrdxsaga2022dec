const todosReducer = (state = {}, action) => {
  switch (action.type) {
    case "TODOS_REQUEST_SUCCESS":
      return {
        ...state,
        todos: action.todos,
      };
    case "TODOS_REQUEST_FAILURE":
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
export default todosReducer;
