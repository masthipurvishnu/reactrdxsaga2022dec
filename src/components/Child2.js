import React from "react";
import { Card, CardContent } from '@mui/material'

class Child2 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Card>
                <CardContent>
                    Child2 component
                    <p>Location: {this.props.location}</p>
                </CardContent>
            </Card>
        )
    }
}
export default Child2