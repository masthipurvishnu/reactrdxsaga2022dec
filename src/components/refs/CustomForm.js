import React, { useEffect, useRef, useState } from "react";

const CustomForm = () => {
    const [name, setName] = useState('')
    // const [renderCount, setRenderCount] = useState(0)
    const renderCount = useRef(0)
    const inputRef = useRef(0)
    const handleClick = () => {
        inputRef.current.focus()
    }

    useEffect(() => {
        // setRenderCount(prevRenderCount => prevRenderCount + 1)
        renderCount.current = renderCount.current + 1

        inputRef.current.focus() // on load or on componentdidmount
    }, [])

    return (
        <>
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
            <div>My name is {name}</div>
            <button onClick={handleClick}>focus</button>
            <div>I rendered {renderCount.current} times</div>
        </>
    )
}

export default CustomForm