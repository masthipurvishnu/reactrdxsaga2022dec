
const initialState = {}
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_ITEMS_RETRIEVE_SUCCESS':
            return {
                ...state,
                items: action.items
            }
        default:
            return state
    }
}

export default searchReducer