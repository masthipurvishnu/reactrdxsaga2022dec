import React from "react";
import { DetectHover2 } from "./HOC-DetectHover";

const Footer = (props) => {
    const render = (hovered) => {
        const style = {
            backgroundColor: hovered ? 'yellow' : 'orange'
        }
        return (
            <>
                <div style={style} >
                    <h1>Footer</h1>
                    <h2>Contact details ...</h2>
                </div>
            </>
        )
    }
    return <DetectHover2 render={render} />
}

export default Footer
