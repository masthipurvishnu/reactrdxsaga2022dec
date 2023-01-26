import React, { useEffect, useRef } from "react";
import StarIcon from '@mui/icons-material/Star';
import { DetectHover2 } from "../../components/HOC-DetectHover";

const Star = (props) => {
    const filterClolor = 'red'
    let refValue = useRef(0)
    const styles = {
        color: props.color,
        width: '2%',
        height: '2%',
        border: '1px solid blue'
    }
    useEffect(() => {
        refValue = props.key
    }, [])
    const render = (hovered, value) => {
        if (hovered) {
            props.handleHover(value)
        }
        return (
            <>
                <StarIcon key={props.rateNumber} style={styles} />
            </>
        )
    }
    return <DetectHover2 render={render} value={props.rateNumber} />
}
export default Star