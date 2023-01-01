import React, { useState } from "react";
import PropTypes from 'prop-types';
import logo from './../logo.svg';
import detectHover from "./HOC-DetectHover";
import { detectHover1 } from "./HOC-DetectHover";

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showComponent: 'Dog',
            mouseHoverFlag: false
        }
    }
    handlerDogs = () => {
        this.props.changeComponent('Dog')
    }
    handlerCounter = () => {
        this.props.changeComponent('Counter')
    }
    onMouseHover = () => {
        console.log('on mouse hover');
        this.setState({ mouseHoverFlag: true })
    }
    onMouseOut = () => {
        console.log('on mouse out');
        this.setState({ mouseHoverFlag: false })
    }
    render() {
        const headerStyle = {
            backgroundColor: this.props?.hovered ? 'red' : 'blue'
        }
        return (
            <>
                <header style={headerStyle} className='App-header'>
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
Header.propTypes = {
    changeComponent: PropTypes.func
};
export default detectHover1(Header) 