// const GET_COUNTER = 'GET_COUNTER_SUCCESS';
// const INCREMENT_COUNTER_SUCCESS = 'INCREMENT_COUNTER_SUCCESS'
// const DECREMENT_COUNTER_SUCCESS = 'DECREMENT_COUNTER_SUCCESS'
const initialState = {
    counter: 0
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COUNTER_SUCCESS":
            return {
                ...state,
                counter: action.counter
            }
        case "INCREMENT_COUNTER_REQUEST":
            return {
                ...state,
                counter: action.counter
            }
        case "INCREMENT_COUNTER_SUCCESS":
            return {
                ...state,
                counter: action.counter
            }
        case "DECREMENT_COUNTER_REQUEST":
            return {
                ...state,
                counter: action.counter
            }
        case "DECREMENT_COUNTER_SUCCESS":
            return {
                ...state,
                counter: action.counter
            }
        default:
            return state
    }
}

export default counterReducer