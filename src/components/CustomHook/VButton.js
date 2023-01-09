import { Button } from "@mui/material";
import React, { useState } from "react";
import useHover from "./useHover";

const VButton = () => {
    const [hoverRef, hovered] = useHover()
    const style = {
        backgroundColor: hovered ? 'gray' : 'lightYellow'
    }

    return (
        <>
            <Button ref={hoverRef}
                variant="outlined"
                style={style}
                color={'error'}
            >
                Custom Button
            </Button>
            <p>Custom Button with custom hook with refs</p>

        </>
    )
}

export default VButton