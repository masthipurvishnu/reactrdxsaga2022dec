import React, { Component } from "react";
import HOCFilterComponent from "./HOCFilterComponent";

class UsersListClassComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <h3>HOC Users List - Class Component</h3>
        )
    }
}
export default HOCFilterComponent(UsersListClassComponent, 'users')
