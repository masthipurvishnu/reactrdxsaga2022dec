import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const ButtonItem = () => {
    const [value, setValue] = useState('')

    const handleClick = () => {

        alert('Button clicked')
        // setValue(value => textfieldID1.value)
    }
    const handleChange = (e) => {
        setValue(value => e.target.value)
    }

    return (
        <>
            <p>Hello world..!</p>
            <Button variant="outlined" onClick={handleClick} >Click here</Button>
            <TextField id="textfieldID1" label="Outlined" variant="outlined" onChange={handleChange} />
            <p>{value}</p>
        </>
    )
}

export default ButtonItem