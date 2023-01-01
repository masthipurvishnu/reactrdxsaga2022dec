import React, { useCallback, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import Welcome from "./Welcome";

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const handleIncrement = () => {
        setCounter(counter => counter + 2)
    }
    const handleDecrement = () => {
        setCounter(counter => counter - 1)
    }
    const handleChange = (event) => {
        setCounter(() => event.target.value)
    }
    const btnStyle = {
        margin: '10px'
    }
    // componentDidUpdate
    useEffect(() => {
        console.log('Dependency - not provided', counter)
    }, [counter])
    // componentDidMount
    // useEffect(() => {
    //     // document.title = `Your counter ${counter}`
    //     // document.addEventListener('click', handleDocClick);
    //     // return () => {
    //     //     document.removeEventListener(handleDocClick);
    //     // }
    // }, [])

    // componentDidMount
    // useEffect(() => {
    //     // document.title = `Counter value ${counter}`
    //     // document.addEventListener('click', handleDocClick)
    //     // return () => {
    //     //     document.removeEventListener('click');
    //     // }
    // }, [counter])

    const handleDocClick = () => {
        alert('you clicked document...!')
    }
    const getFun = useCallback(() => { }, []) /// when passed as normal fun it creates a new fun everytie and renders the components.
    // when you pass useCallback memorized fun, it refs to the location and remembers...
    return (
        <>
            <Welcome name={getFun} />
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

export default Counter