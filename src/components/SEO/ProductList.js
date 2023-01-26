import React, { useEffect, useState } from "react";
import { FunComponent2 } from "../ModuleTest/setStateTest";

const ProductList = () => {
    const [value, setValue] = useState('')
    const handleClick = () => {
        setValue(v => 'vv')
    }

    // These are the places where Error Boundaries will not be able to catch an error:
    //     1. Event handlers(e.g., onClick, onChange, etc.)
    //     2. setTimeout or requestAnimationFramecallbacks
    //     3. Server - side rendering(SSR)
    //     4. And errors caused by the error boundary itself(rather than its children)
    useEffect(() => {
        if (value == 'vv') {
            throw new Error('Sending errors from ProductList..!')
        }
    }, [value])

    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Send Errors</button>
            <FunComponent2 />
        </>
    )
}
export default ProductList