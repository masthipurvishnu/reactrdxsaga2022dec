import React from "react";
import { Card, CardContent } from '@mui/material'
import Child1 from "./Child1";
import Child2 from "./Child2";
class ParentComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { children } = this.props
        const styleDiv = {
            color: 'orange'
        }
        return (
            <>
                <Card >
                    <div>PARENT Component</div>
                    {this.props.flag ?
                        <CardContent>
                            <div style={styleDiv}>Parent Child comm through props</div>
                            {/* this is normal Parent Child communication */}
                            <Child1 name={'vishnu'} />
                            <Child2 location={'plano'} />
                        </CardContent>
                        :
                        <CardContent>
                            <div style={styleDiv}>Parent Child comm through this.children</div>
                            {/* this is parent children communcation through React Children */}
                            {children}
                        </CardContent>
                    }
                </Card>
            </>
        )
    }
}
export default ParentComponent