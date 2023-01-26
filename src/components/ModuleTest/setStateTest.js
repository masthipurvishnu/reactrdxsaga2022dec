import React, { useEffect, useState } from "react"

const FunComponent1 = () => {
    const [value, setValue] = useState(0)
    const [fontSize, setFontSize] = useState(44)

    return (
        <>
            <button onClick={() => {
                setValue(value => value + 1)
                // console.log(value); //what is the value it logs when first time click of the button? // 0 
            }} >click here</button>
            <div style={{ fontSize }}>{value}</div>  {/* here it renders 0 then imediatly changes to 1 after setValue updates */}
            <div>-----------------------</div>
            <FunComponent2 />
        </>
    )
}

export const FunComponent2 = React.memo(() => { // REACT.MEMO => mutate/immutability
    const [value, setValue] = useState({ text: 'hi' })
    useEffect(() => {
        if (value.text === 'new value') {
            // Error Boundry works in life cycle methods/hooks NOT in the event handlers like below ln#43
            // throw new Error('error from funCcomoent2')
        }
    }, [value])

    return (
        <>
            <button onClick={() => {
                // this is mutation
                // setValue(() => {text: "new value"}) // this wont upate the value as this is trying to mutate the state
                // this is immutability
                setValue(() => {
                    return {
                        ...value,
                        text: "new value"
                    }
                })
                // console.log(value.text); // first value will be displayed then setValue will be update as callback.
                // Error Boundry works in life cycle methods/hooks NOT in the event handlers like below
                throw new Error('error from funCcomoent2')
            }} >click here</button>
            <div>{value.text}</div>
        </>
    )
})

export default FunComponent1