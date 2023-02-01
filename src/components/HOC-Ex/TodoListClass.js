import React, { Component } from "react";
import HOCFilterComponent from "./HOCFilterComponent";

class TodoListClass extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }

    render() {
        return (
            <>
                <h3>HOC - Todo List ClassComponent</h3>
            </>)
    }
}
export default HOCFilterComponent(TodoListClass, 'todos')