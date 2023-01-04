import { PropTypes } from "prop-types";
import React, { memo, useMemo } from "react";

const Welcome = memo((props) => {
    useMemo(() => {
        // console.log('Welcome component rendered', props.name);
    }, [props.name])
    return (
        <>
            <h1>Welcome to {props?.name} component..!</h1>
        </>
    )
})

// Welcome.propTypes = {
//     name: PropTypes.string.isRequired
// }

export default Welcome