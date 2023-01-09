import React from "react";
import { DetectHover2 } from "./HOC-DetectHover";

const Footer = (props) => {
    const render = (hovered) => {
        const style = {
            backgroundColor: hovered ? 'yellow' : 'orange'
        }
        return (
            <>
                <footer style={style} className="App-footer">
                    <div >
                        <h1>Footer</h1>
                        <h2>Contact details ...</h2>
                    </div>
                </footer>
            </>
        )
    }
    return <DetectHover2 render={render} />
}

export default Footer
