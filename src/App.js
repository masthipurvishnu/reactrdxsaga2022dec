import React, { createContext } from 'react';
import './App.css';

import { connect } from 'react-redux'
import Header from './components/Header'
import Dog from './components/Dog';
import Counter from './components/Counter/Counter';
import DogDetails from './components/DogDetails';
import CounterClass from './components/Counter/CounterClass';
import ParentComponent from './components/Parent';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Footer from './components/Footer';
import VButton from './components/CustomHook/VButton';
import { Grid, ListItem } from '@mui/material';
import CustomForm from './components/refs/CustomForm';
import Search from './components/Search/Search';
import AppRouter from './Router/AppRouter';

export const CountContext = createContext()
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showComp: 'Search'
    }
  }
  handleChangeComponent = (name) => {
    this.state.showComp = name
    this.forceUpdate()
  }
  dogName = (url) => {
    return (url?.substring(url?.indexOf('breeds') + 7, url?.lastIndexOf('/')))?.toUpperCase()
  }
  renderSwitch = () => {
    const { fetching, dog, handleRequestDogClick, error } = this.props;
    switch (this.state.showComp) {
      case 'Dog':
        return (
          <>DOG
            <Dog
              fetching={fetching}
              parentCallbackOnRequestDog={handleRequestDogClick}
            />
            <CountContext.Provider value={this.dogName(dog)}>
              <DogDetails />
            </CountContext.Provider>
          </>
        )
      case 'Counter':
        return (
          <>
            COUNTER
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid border={'1px solid red'} margin={2} item xs>
                <CounterClass />
              </Grid>
              <Grid border={'1px solid red'} margin={2}
                item xs={4}>
                <Counter />
              </Grid>
              <Grid border={'1px solid red'} margin={2}
                item xs>
                <div>
                  <VButton />
                  <CustomForm />
                </div>
              </Grid>
            </Grid>
            <div style={{ display: 'inline-block', border: '1px solid red', margin: '20px' }}>
              <ParentComponent flag={true} />
            </div>
            <div style={{ display: 'inline-block', border: '1px solid green' }}>
              <ParentComponent flag={false} >
                <Child1 name={'Raja'} />
                <Child2 location={'Irving'} />
              </ParentComponent>
            </div>
          </>
        )
      case 'Search':
        return (
          <>SEARCH
            <Search />
          </>
        )
      default:
        return (
          <>Something broken..!</>
        )
    }
  }
  blogPosts = {
    '1': {
      title: "First Blog Post",
      description: "Lorem ipsum dolor..."
    },
    '2': {
      title: "Second Blog Post",
      description: "Hello React Router V6..."
    }
  }
  render() {
    const { fetching, dog, handleRequestDogClick, error } = this.props;
    return (
      <AppRouter>
        <div className='App'>
          <Header changeComponent={this.handleChangeComponent} />
          <main className='main'>
            {this.renderSwitch()}
            {this.state.showComp === 'Dog' ?
              <>
              </>
              : <>
              </>
            }
          </main>
          <Footer />
        </div>
      </AppRouter>
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

export default connect(mapStateToProps)(App)