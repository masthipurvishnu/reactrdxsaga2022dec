const initialStatus = {};
const counterValueReducer = (status = initialStatus, action) => {
  switch (action.type) {
    case "GET_COUNTER_SUCCESS":
      return {
        ...status,
        counter: action.counter,
      };
    case "INCREMENT_COUNTER_SUCCESS":
      return {
        ...status,
        counter: action.counter,
      };
    case "DECREMENT_COUNTER_SUCCESS":
      return {
        ...status,
        counter: action.counter,
      };
    default:
      return {
        ...status,
      };
  }
};
export default counterValueReducer;
