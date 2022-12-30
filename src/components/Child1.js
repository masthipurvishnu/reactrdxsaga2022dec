import React from "react";
import { Card, CardContent } from '@mui/material'

class Child1 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Card>
                <CardContent>
                    Child1 component
                    <p>Name: {this.props.name}</p>
                </CardContent>
            </Card>
        )
    }
}
export default Child1