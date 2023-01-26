
const initialState = {}
const exchangeRatesRecuder = (state = initialState, action) => {
    switch (action.type) {
        // case 'GET_EXCHANGERATES_REQUEST':
        case 'GET_EXCHANGERATES_SUCCESS':
            return {
                ...state,
                rates: action.rates
            }
        default:
            return state
    }
}
export default exchangeRatesRecuder