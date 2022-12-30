import React, { useState } from "react";

const detectHover = (Component) => {

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
export default detectHover