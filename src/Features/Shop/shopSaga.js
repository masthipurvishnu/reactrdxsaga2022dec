import { call, put } from "redux-saga/effects"

const fetchProducts = async () => {
    const resp = await fetch('https://fakestoreapi.com/products')
    const data = await resp.json()
    return data
}
function* getProducts() {
    // fetchProducts().then(r => {
    //     yield put({ type: 'GET_PRODUCTS_LIST_SUCCESS', r })
    // })
    const products = yield call(fetchProducts)
    yield put({ type: 'GET_PRODUCTS_LIST_SUCCESS', products })
}
export default getProducts