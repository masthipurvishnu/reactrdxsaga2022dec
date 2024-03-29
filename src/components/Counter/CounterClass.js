import React from "react";
import { Button, Card, CardContent } from '@mui/material'

class CounterClass extends React.Component {
    constructor(props) {
        super(props) //need this only if you want to use props in consturetor otherwise not requered...
        this.state = {
            count: 0
        }
    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }
    componentDidMount() {
        document.title = `componentDidMount You clicked ${this.state.count} times`
    }
    componentDidUpdate() {
        if (this.state.count >= 2) {
            throw new Error('Error Simulation for test')
        }
        document.title = `componentDidUpdate Yes, You clicked ${this.state.count} times`
    }
    componentWillUnmount() {
        document.title = `componentWillUnmount No, You clicked ${this.state.count} times`
    }
    render() {

        return (
            <>
                <Card variant="outlined" sx={{
                    margin: '20px', padding: '20px',
                }}>
                    <div>counter class</div>
                    <Button sx={{ margin: '10px' }} variant="outlined" onClick={this.handleIncrement}>Increment</Button>

                    <CardContent>
                        {this.state.count}
                    </CardContent>
                </Card>
            </>
        )
    }
}
export default CounterClass