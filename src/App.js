import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import Header from './header'
class App extends React.Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    console.log(dog);
    return (
      <div className='App'>
        <Header />
        <main className='main'>
          <img src={dog || logo} className='dog-img' alt='logo' />
          <h1 className='App-title'>Welcome to Dog Saga</h1>
          {dog ? (
            <p className='App-intro'>Keep clicking for new digs</p>
          ) : (
            <p className='App-intro'>Replace the react icon with a dog!</p>
          )}

          {fetching ? (
            <button disabled>Fetching...</button>
          ) : (
            <button onClick={onRequestDog}>Request a Dog</button>
          )}
          {error && <p style={{ color: 'red' }}>Uh oh - something wend wrong..1</p>}
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
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//       </header>
//       <main>
//         Main
//       </main>
//     </div>
//   );
// }

// export default App;
