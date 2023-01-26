import { Card } from "@mui/material";
import React from "react";

class ErrorBoundray extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errorMessage: ''
        }
    }
    static getDerivedStateFromError(error) {
        return { errorMessage: error.toString() }
    }

    logErrorToExampleService = (e) => console.log(e)
    // logErrorToExampleService = console.log

    componentDidCatch(error, info) {
        this.logErrorToExampleService(error)
    }

    render() {
        if (this.state.errorMessage) {
            return (
                <Card color="red" sx={{ margin: 1, padding: 2, border: '2px solid red' }}>
                    <div>Something wento wrong..! We are working hard to fix it..!</div>
                </Card>
            )
        }
        return (
            <>
                {this.props.children}
            </>
        )
    }
}
export default ErrorBoundray