import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import Header from './header'
import Dog from './dog';
import Counter from './components/Counter';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showComp: 'Dog'
    }
  }
  handleChangeComponent = (name) => {
    this.state.showComp = name
    this.forceUpdate()
  }
  render() {
    const { fetching, dog, handleRequestDogClick, handleChangeComponent, error } = this.props;
    return (
      <div className='App'>
        <Header changeComponent={this.handleChangeComponent} />
        <main className='main'>
          {this.state.showComp === 'Dog' ?
            <>
              <div>Dog component</div>
              <Dog
                dog={dog || logo}
                fetching={fetching}
                parentCallbackOnRequestDog={handleRequestDogClick}
              />
            </>
            : <div>Counter component</div>
          }
          <Counter />
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