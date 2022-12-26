import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import Header from './header'
import Dog from './dog';
class App extends React.Component {
  render() {
    const { fetching, dog, handleRequestDogClick, error } = this.props;
    console.log(dog);
    return (
      <div className='App'>
        <Header />
        <main className='main'>
          <Dog
            dog={dog || logo}
            fetching={fetching}
            parentCallbackOnRequestDog={handleRequestDogClick}
          />
        </main>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleRequestDogClick: () => dispatch({ type: "API_CALL_REQUEST" })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)