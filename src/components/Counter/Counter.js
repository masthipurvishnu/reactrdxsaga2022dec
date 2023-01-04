import React, { useCallback, useEffect, useMemo, useState } from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import Welcome from "../Welcome";
import { connect, useDispatch, useSelector } from "react-redux";

const Counter = (props) => {
    const btnStyle = {
        margin: '10px'
    }
    const dispatch = useDispatch()
    const [counter, setCounter] = useState(0)
    const counter1 = useSelector(state => state.counter)
    const handleIncrement = () => {
        setCounter(counter => counter + 2)
        dispatch({ type: 'INCREMENT_COUNTER_REQUEST', counter1 })
    }
    const handleDecrement = () => {
        setCounter(counter => counter - 1)
    }
    const handleChange = (event) => {
        setCounter(() => event.target.value)
    }
    useEffect(() => {
        dispatch({ type: 'GET_COUNTER' })
    }, [])

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const largeNumber = () => {
        return Math.max(...array)
    }
    // without useMemo, the largeNumber executes everytime a state/prop change. 
    const memorizeLargeNum = useMemo(largeNumber, [])


    const getFun = useCallback(() => { return 'Counter' }, []) /// when passed as normal fun it creates a new fun everytie and renders the components.
    // when you pass useCallback memorized fun, it refs to the location and remembers...

    // const counter = useSelector(state => state.counter)
    return (
        <>
            <h1>{counter1}</h1>
            <Welcome name={getFun()} />
            <h1>Large number: {memorizeLargeNum}</h1>
            <TextField label="CounterNumber"
                type={'number'}
                InputLabelProps={{ shrink: true }}
                value={counter}
                onChange={handleChange}
            ></TextField>
            <div>Counter : {counter}</div>
            <Button
                variant="outlined"
                style={btnStyle}
                onClick={handleIncrement}>Increment</Button>
            <Button variant="contained" onClick={handleDecrement}>Decrement</Button>
        </>
    )
}
// const mapDispatchToProps = dispatch => {
//     console.log('mapDispatchToProps');
//     return {
//         getCounterValue: dispatch({ type: 'GET_COUNTER' })
//     }
// }

// const mapStateToProps = state => {
//     console.log('mapStateToProps');
//     return {
//         counter: state.counter
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default Counter