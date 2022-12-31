import React, { useState } from "react";

const detectHover1 = (Component) => {

    return (props) => {
        const [hovered, setHovered] = useState(false)
        return (
            <div
                onMouseOver={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Component hovered={hovered} {...props} />
            </div>
        )
    }
}

const DetectHover2 = (props) => {
    const [hovered, setHovered] = useState(false)
    return (
        <div
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {props.render(hovered)}
        </div>
    )
}
export { detectHover1, DetectHover2 }