const shopReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_LIST_SUCCESS':
            return {
                ...state,
                products: action.products
            }
        default:
            return {
                ...state
            }
    }
}
export default shopReducer