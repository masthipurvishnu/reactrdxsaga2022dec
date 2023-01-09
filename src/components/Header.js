import React, { useState } from "react";
import PropTypes from 'prop-types';
import logo from './../logo.svg';
import detectHover from "./HOC-DetectHover";
import { detectHover1 } from "./HOC-DetectHover";
import { Button, Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";

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
    handlerSearch = () => {
        this.props.changeComponent('Search')
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
            backgroundColor: this.props?.hovered ? 'background.paper' : 'background.paper'
        }
        return (
            <>
                <header style={headerStyle} className={'App-header'}>
                    <div style={{ textAlign: 'left', paddingTop: '20px' }}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div>
                        <Tabs indicatorColor="secondary" textColor="inherit" value={'/home'} >
                            <Tab label="Home" value="/home" to="/home" component={Link} />
                            <Tab label="Posts" value={'/posts'} to={'/posts'} component={Link} />
                            <Tab label="Users" value={"/users"} to={'/users'} component={Link} />
                            <Tab label={'About'} value={'/about'} to={'/about'} component={Link} />
                            <Tab label={'Dogs'} value={'/dogs'} to={'/dogs'} component={Link} />
                            <Tab label={'Counter'} value={'/counter'} to={'/counter'} component={Link} />
                            <Tab label={'Search'} value={'/search'} to={'/search'} component={Link} />
                        </Tabs>
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