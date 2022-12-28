import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import Header from './components/Header'
import Dog from './components/Dog';
import Counter from './components/Counter';
import DogDetails from './components/DogDetails';

export const CountContext = createContext()
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showComp: 'Dog',
      impageURL: ''
    }
  }
  handleChangeComponent = (name) => {
    this.state.showComp = name
    this.forceUpdate()
  }
  dogName = (url) => {
    return (url?.substring(url?.indexOf('breeds') + 7, url?.lastIndexOf('/')))?.toUpperCase()
  }
  render() {
    const { fetching, dog, handleRequestDogClick, error } = this.props;
    return (
      <div className='App'>
        <Header changeComponent={this.handleChangeComponent} />
        <main className='main'>
          {this.state.showComp === 'Dog' ?
            <>
              <Dog
                fetching={fetching}
                parentCallbackOnRequestDog={handleRequestDogClick}
              />
              <CountContext.Provider value={this.dogName(dog)}>
                <DogDetails />
              </CountContext.Provider>

            </>
            : <>
              <Counter />
            </>
          }
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