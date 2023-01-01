import { PropTypes } from "prop-types";
import React from "react";

const Welcome = (props) => {
    console.log('Welcome component rendered');
    return (
        <>
            <h1>Welcome to {props?.name} component..!</h1>
        </>
    )
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired
}

export default Welcome