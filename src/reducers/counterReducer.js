// const GET_COUNTER = 'GET_COUNTER_SUCCESS';
// const INCREMENT_COUNTER_SUCCESS = 'INCREMENT_COUNTER_SUCCESS'
// const DECREMENT_COUNTER_SUCCESS = 'DECREMENT_COUNTER_SUCCESS'
const initialState = {
    counter: 0
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COUNTER_SUCCESS":
            // console.log('GET_COUNTER_SUCCESS', JSON.stringify(action));
            return {
                ...state,
                counter: action.counter
            }
        case "INCREMENT_COUNTER_REQUEST":
            // console.log('INCREMENT_COUNTER_REQUEST', JSON.stringify(action));
            return {
                ...state,
                counter: action.counter
            }
        case "INCREMENT_COUNTER_SUCCESS":
            // console.log('INCREMENT_COUNTER', JSON.stringify(action));
            return {
                ...state,
                counter: action.counter
            }
        case "DECREMENT_COUNTER_SUCCESS":
            console.log('DECREMENT_COUNTER', JSON.stringify(action));
            return {
                ...state,
                counter: action.counter
            }
        default:
            return state
    }
}

export default counterReducer