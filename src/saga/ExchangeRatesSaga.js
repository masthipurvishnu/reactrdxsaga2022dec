import { call, put } from "redux-saga/effects"

function* getExchangeRates() {
    const rates = yield call(fetchExchangeRates)
    yield put({ type: 'GET_EXCHANGERATES_SUCCESS', rates })
}

const fetchExchangeRates = async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/exchange_rates')
    const rates = await res.json()
    return rates
}

export default getExchangeRates