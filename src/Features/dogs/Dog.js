import React, { createContext } from "react";
import PropTypes from "prop-types";
import logo from "./../../logo.svg";
import { connect } from "react-redux";
import DogDetails from "./DogDetails";
import { Card } from "@mui/material";

export const DogContext = createContext();
class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onRequestDogTrigger = (event) => {
    this.props.parentCallbackOnRequestDog();
    event.preventDefault(); // DO WE REALLY NEED THIS here?
  };
  componentDidMount() {
    // console.log(JSON.stringify(this.state.dogsReducer));
  }

  dogName = (url) => {
    return url
      ?.substring(url?.indexOf("breeds") + 7, url?.lastIndexOf("/"))
      ?.toUpperCase();
  };
  render() {
    const {
      fetching,
      dog,
      parentCallbackOnRequestDog,
      handleRequestDog,
      error,
    } = this.props;

    return (
      <>
        <Card sx={{ textAlign: "center" }}>
          <h1 className="App-title">Welcome to Dog Saga</h1>
          <img src={dog} className="dog-img" alt="logo" />
          {dog ? (
            <p className="App-intro">Keep clicking for new digs</p>
          ) : (
            <p className="App-intro">Replace the react icon with a dog!</p>
          )}
          {fetching ? (
            <button disabled>Fetching...</button>
          ) : (
            <button onClick={handleRequestDog}>Request a Dog</button>
          )}
          {error && (
            <p style={{ color: "red" }}>Uh oh - something wend wrong..1</p>
          )}
          <DogContext.Provider value={this.dogName(dog)}>
            <DogDetails />
          </DogContext.Provider>
        </Card>
      </>
    );
  }
}
Dog.defaultProps = {
  fetching: false,
  dog: logo,
};
Dog.propTypes = {
  fetching: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    dog: state.dogsReducer.dog,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleRequestDog: () => dispatch({ type: "API_CALL_REQUEST" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dog);
