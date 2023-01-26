import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Movie = () => {
    // const [items, setItems] = useState(null)
    const dispatch = useDispatch()
    const items = useSelector(state => state.movieReducer.items)
    const handleClick = () => {
        dispatch({ type: 'GET_MOVIE_LIST' })
    }

    useEffect(() => {
        console.log(JSON.stringify(items));
    }, [items])

    return (
        <>
            <h1>{`Movies List`}</h1>
            <button onClick={handleClick}>Get Movies</button>
            {!!items ?
                <>
                    <h3>{items.title}</h3>
                    <p>{items.plot}</p>
                </>
                :
                <>No Movie list avaialable</>
            }
        </>
    )
}
export default Movie