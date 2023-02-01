import React, { Component, memo, useState } from "react";

class UserCount extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     userCount: 10,
        //     users: props.users
        // }
    }
    componentDidUpdate() {
        // console.log(this.props.users);
    }
    // DONT REMOVE THIS
    // shouldComponentUpdate(newProps, newState) {
    //     if (newProps.users !== this.state.users) {
    //         return true
    //     }
    //     // if (newState.userCount !== this.state.userCount) {
    //     //     return true
    //     // }
    //     return false
    // }
    render() {
        console.log('Usercount Regular componet renders', this.props.users.length);
        return (
            <>
                <h4>Regular Component</h4>
                <div className="ui blue message">
                    {/* we have fetched {this.state.userCount} users */}
                    we have fetched {this.props.users.length} users
                </div>
            </>
        )
    }
}
export default UserCount