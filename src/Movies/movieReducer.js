const initalState = {}
const movieReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'GET_MOVIE_LIST_SUCCESS':
            console.log('reducer - ', action.items);
            return {
                ...state,
                items: action.items
            }
        default:
            return {
                state
            }
    }
}

export default movieReducer