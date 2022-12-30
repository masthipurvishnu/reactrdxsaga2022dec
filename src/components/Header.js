import React from "react";
import PropTypes from 'prop-types';
import logo from './../logo.svg';
class Header extends React.Component {
    constructor(props) {
        super(props)
        console.log(JSON.stringify(props));
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
            backgroundColor: this.state?.mouseHoverFlag ? 'red' : 'blue'
        }
        return (
            <>
                <header onMouseOut={this.onMouseOut} onMouseOver={this.onMouseHover} style={headerStyle} className='App-header'>
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