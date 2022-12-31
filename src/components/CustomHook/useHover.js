import React, { useEffect, useRef, useState } from "react";

const useHover = () => {
    const [value, setValue] = useState(false)

    const ref = useRef(null)
    const handleMouseOver = () => setValue(true)
    const handleMouseOut = () => setValue(false)

    useEffect(() => {
        const node = ref.current;
        if (node) {
            node.addEventListener('mouseover', handleMouseOver)
            node.addEventListener('mouseout', handleMouseOut)

            // componentWillUnMound
            return () => {
                node.removeEventListener('mouseover', handleMouseOver)
                node.removeEventListener('mouseout', handleMouseOut)
            }
        } else {
            console.log('vv node is null')
        }
    }, [])
    return [ref, value]
}

export default useHover