import { Box } from "@mui/material";
import React from "react";

class CounterPureComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: {
                a: 0
            }
        }
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     // return this.state.counter.a !== nextState.counter.a // this is not rerendering
    //     return this.state.counter !== nextState.counter // this is rerendering the component.
    // }
    componentDidMount() {
        // console.log('componentDidMount counter - ', this.state.counter);
        /*
        if it is NOT A PURE COMPONENT, here the state keeps updates every second and
        causes rerender of the entire component
        with Pure comonent, through the timer keeps run and updae state, however the 
        component wont rerender as the state value is not chaning
        */
        // this.shouldComponentUpdate(nextProps, nextState)
        // in shallow comparision, it compars the reference.. not the value.
        // due to which if the json obj is same still it rerenders in case of non preimitive values
        // setInterval(() => {
        //     console.log('intravel invoked');
        //     this.setState({
        //         counter: {
        //             a: 0
        //         }
        //     })
        // }, 1000);
    }
    handleClick = () => {
        this.setState({ counter: this.state.counter })
    }

    render() {
        // console.log('render counter - ', this.state.counter);
        return (
            <>
                <Box sx={{
                    border: '1px solid red',
                    margin: '1px 10px 0px 0px',
                    padding: 3
                }}>
                    <div>Counter value - {JSON.stringify(this.state.counter)}</div>
                    <button onClick={this.handleClick} >Counter Button</button>
                </Box>
            </>
        )
    }
}
export default CounterPureComponent