import { call, put } from "redux-saga/effects"

const fetchMovies = async () => {
    const res = await fetch('http://localhost:3100/movies')
    const data = await res.json()
    return data
}
function* getMovieList() {
    const movieList = yield call(fetchMovies)
    console.log('getmovielist here', movieList);
    yield put({ type: 'GET_MOVIE_LIST_SUCCESS', items: movieList })
}

export default getMovieList
