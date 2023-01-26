import { Chip } from "@mui/material";
import { Component, PureComponent } from "react";

class PeopleViewed extends PureComponent {
    constructor(props) {
        super(props);
        // this.state
    }
    render() {
        return (
            <>
                <div><span>Buyed </span>
                    <Chip
                        sx={{ marginBottom: 0.3, marginLeft: 0.3 }}
                        color="primary" variant="outlined" label={this.props?.views} />
                </div>
            </>
        )
    }
}
export default PeopleViewed
