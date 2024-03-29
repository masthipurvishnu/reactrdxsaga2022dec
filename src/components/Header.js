import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "./../logo.svg";
import { detectHover1 } from "./HOC-DetectHover";
import { Button, Menu, MenuItem, Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: "Dog",
      mouseHoverFlag: false,
      navIndex: "/home",
      open: false,
      anchorEl: null | HTMLElement,
    };
  }
  handlerDogs = () => {
    this.props.changeComponent("Dog");
  };
  handlerCounter = () => {
    this.props.changeComponent("Counter");
  };
  handlerSearch = () => {
    this.props.changeComponent("Search");
  };
  hanldeNavChange = (event, index) => {
    this.setState({ navIndex: index });
  };
  onMouseHover = () => {
    console.log("on mouse hover");
    this.setState({ mouseHoverFlag: true });
  };
  onMouseOut = () => {
    this.setState({ mouseHoverFlag: false });
  };
  componentDidMount() {
    const path = window.location.pathname;
    this.setState({
      navIndex: path === "/" ? "/home" : path,
    });
  }
  onMouseOver1 = (e) => {
    e.preventDefault();
    // console.log("onmouseover");
    this.setState({ open: !this.state.open });
  };
  options = ["Todo List", "Users List", "Counter"];
  render() {
    const headerStyle = {
      backgroundColor: this.props?.hovered ? "#fff" : "green",
    };
    return (
      <>
        <header style={headerStyle} className={"App-header"}>
          <div style={{ textAlign: "left", paddingTop: "20px" }}>
            <img src={logo} className="App-logo" alt="logo" />
            {/* <Menu
              sx={{ top: "-560px" }}
              id="lock-menu"
              anchorEl={this.state.anchorEl}
              open={this.state.open}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {this.options.map((option, index) => (
                <MenuItem
                  key={option}
                  disabled={index === 0}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu> */}
          </div>
          <div>
            <Tabs
              sx={{ margin: 1 }}
              onChange={this.hanldeNavChange}
              indicatorColor="secondary"
              textColor="inherit"
              value={this.state.navIndex}
            >
              <Tab
                label="Home"
                value="/home"
                to="/home"
                component={Link}
                onMouseOver={this.onMouseOver1}
              ></Tab>
              <Tab label="Shop" value={"/shop"} to={"/shop"} component={Link} />
              <Tab
                label="Posts"
                value={"/posts"}
                to={"/posts"}
                component={Link}
              />
              <Tab
                label="Users"
                value={"/users"}
                to={"/users"}
                component={Link}
                style={{ backgroundColor: "orange" }}
              />
              <Tab
                label={"Dogs"}
                value={"/dogs"}
                to={"/dogs"}
                component={Link}
              />
              <Tab
                label={"Counter"}
                value={"/counter"}
                to={"/counter"}
                component={Link}
              />
              <Tab
                label={"Search"}
                value={"/search"}
                to={"/search"}
                component={Link}
              />
              <Tab
                label={"Stream"}
                value={"/stream"}
                to={"/stream"}
                component={Link}
              />
              <Tab
                label={"About"}
                value={"/about"}
                to={"/about"}
                component={Link}
              />
            </Tabs>
          </div>
        </header>
      </>
    );
  }
}
Header.propTypes = {
  changeComponent: PropTypes.func,
};
export default detectHover1(Header);
