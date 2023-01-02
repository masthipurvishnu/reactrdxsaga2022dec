import { Card } from "@mui/material";
import { padding } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import CustomInput from "./CustomInput";

const CustomForm = () => {
    const [name, setName] = useState('')
    // const [renderCount, setRenderCount] = useState(0)
    const renderCount = useRef(1)
    const inputRef = useRef(0)
    const handleClick = () => {
        inputRef.current.focus()
    }
    useEffect(() => {
        // setRenderCount(prevRenderCount => prevRenderCount + 1)
        renderCount.current = renderCount.current + 1
        inputRef.current.focus() // on load or on componentdidmount
    })
    return (
        <>
            <Card sx={{
                border: '1px solid red',
                margin: '10px', padding: '5px'
            }}>
                {/* <input ref={inputRef} value={name} 
                onChange={(e) => setName(e.target.value)} /> */}
                <div>My name is {name}</div>
                <button onClick={handleClick}>focus</button>
                <div>I rendered {renderCount.current} times</div>
                <CustomInput ref={inputRef} value={name}
                    onChange={(e) => setName(e.target.value)} />
            </Card>
        </>
    )
}

export default CustomForm