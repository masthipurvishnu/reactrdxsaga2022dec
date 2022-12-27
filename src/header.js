import React from "react";
import { ReactPropTypes } from "react";
import PropTypes from 'prop-types';
import logo from './logo.svg';
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showComponent: 'Dog'
        }
    }
    handlerDogs = () => {
        this.props.changeComponent('Dog')
    }
    handlerCounter = () => {
        this.props.changeComponent('Counter')
    }
    render() {

        return (
            <>
                <header className='App-header'>
                    <div style={{ textAlign: 'left', paddingTop: '20px' }}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div>
                        <button onClick={this.handlerDogs}>Dogs</button>
                        <button
                            style={{ margin: '0 5px' }}
                            onClick={this.handlerCounter}
                        >Counter</button>
                    </div>
                </header>
            </>
        )
    }
}
Header.protoTypes = {
    changeComponent: PropTypes.func
};
export default Header