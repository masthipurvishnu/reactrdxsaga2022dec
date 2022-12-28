import React, { useState } from "react";
import Button from '@mui/material/Button';

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const handleIncrement = () => {
        setCounter(counter => counter + 2)
    }
    const handleDecrement = () => {
        setCounter(counter => counter - 1)
    }
    const btnStyle = {
        margin: '10px'
    }
    return (
        <>
            <h1>Welcome to Counter Component ..!</h1>
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