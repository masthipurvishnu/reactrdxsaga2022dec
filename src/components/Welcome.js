import { PropTypes } from "prop-types";
import React, { memo, useMemo } from "react";

const Welcome = memo((props) => {
    console.log('Welcome component rendered1', props.name);
    useMemo(() => {
        console.log('Welcome component rendered2', props.name);
    }, [props.name])
    return (
        <>
            <h1>Welcome to {props?.name} component..!</h1>
        </>
    )
})

Welcome.propTypes = {
    name: PropTypes.string.isRequired
}

export default Welcome