import React, { PureComponent } from "react";

class PureUserCount extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            userCount: 10
        }
        this.incrementUserCount.bind(this)
    }
    incrementUserCount = () => {
        this.setState({ userCount: this.state.userCount + 1 })
    }
    render() {
        // console.log('PureUsercount componet renders');
        console.log('PureUsercount componet renders, count -', this.props.users.length);
        return (
            <>
                <h4>Pure Component</h4>
                <div style={{
                    border: '1px solid green',
                    height: 40, width: '75%',
                    marginLeft: 10,
                    backgroundColor: '#FFA',
                }}
                    className="ui blue message">
                    we have fetched {this.state.userCount} users
                    {/* we have fetched {this.props.users.length} users */}
                    {/* if it is primitive it renders once, as users is an object,
                     it renders more than once as i voids pure*/}
                    <button onClick={this.incrementUserCount}>Increment</button>
                </div>
            </>
        )
    }
}
export default PureUserCount