# Free APIs
// https://api.chucknorris.io/jokes/random
// https://jsonplaceholder.typicode.com/users
// https://dog.ceo/api/breeds/image/random

https://react-testing-library-examples.netlify.app/

# 
Component communication:
using props
callback events
context
children - {props.children}
Redux/Store
ref/forwardRefs
forceUpdate()
### Parent to child communication
**Answer:**
through props
### Child to parent
through prop callback events
### Parent to down the line childern, in the tree like e.g. locale preference, UI theme?  
using conetex..
### grand/great grand childer to top parent?
using Redux/Store
### siblings?
1. Through parent
2. using Redux/Store
### one component to any other component in the application
using Redux/Store

We have to find the closest common ancestor and next passing through all descendant components till state will be pass to proper.
How to resolve it in clean way? Keeping components clean and managed.
Redux/Store is another way if we have this option, if not?
Event Emitter is the answer. Very popular library from node.js.

### Top to down in a Tree nodes
Using context

### dynamically pass props to childern
using {props.children} (parent to sw3 & child2 components in this examples)
### when a prop changed from its parent, how will the component updates the data?
Sol: forceUpdate() -- ?

### useEffect (callback[, dependency])
```
A) Dependency - Not provided: the side-effect runs after every rendering.
like onMounted --?????
    useEffect(() => {
        console.log('in useeffect - counter value', counter)
    }) 
B) An empty array []: the side-effect runs once after the initial rendering.
Like componentDidMount
    useEffect(() => {
        console.log('An empty array [] - in useeffect - counter value', counter)
    }, []) 
    useEffect(() => {
        return () => { // like componentUnmouted
        console.log('An empty array [] - in useeffect with return - counter value', counter)
        }
    }, [])
C) Has props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs only when any depenendecy value changes.
// componentDidUpdate..
    useEffect(() => {
        console.log('in useeffect - counter value', counter)
    }, [counter]) // executes whenever counter value changed
```
### what is HOC?
Is a component which takes a component as argument, and enhances 
its behaviour/features... 
HOC for class components, wrap class components to enhance its behavaviour...
In case of Functional components, use render props.
create a render method and pass to HOC prop (it is like a prop callback to parent component)

### what is render prop and what is it good for?
DetectHover1 & Header => HOC
DetectHover2 & Footer => render props ---?
(render props looks like old react way.. still we can use them here and there..)

### What are hooks and what problems it can solve?
Hooks are life cycle methods. To find state, didMound, Didupdate etc. 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

===========
# How to bind methods or event handlers in JSX callbacks?
https://github.com/sudheerj/reactjs-interview-questions#how-to-bind-methods-or-event-handlers-in-jsx-callbacks


# Why should we not update the state directly?
If you try to update the state directly then it won't re-render the component.
Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.

# How to pass a parameter to an event handler or callback?
<button onClick={() => this.handleClick(id)} /> 
or
<button onClick={this.handleClick.bind(this, id)} />
or if the function is arraw funs
<button onClick={this.handleClick(id)} />;
handleClick = (id) => () => {
  console.log("Hello, your ticket number is", id);
};

# What is the purpose of double curly braces in React's JSX syntax?
{ .. } evaluates to an expression in JSX.
{ key: value } implies a javascript object.
<Image source={pic} style={{width: 193}}/>
That's the JSX way of embedding variable. 
pic can be any Javascript expression/variable/object.
You can also do something like { 2+3 } and it will evaluate to { 5 }

{width: 193} is a Javascript object. And to embed this object in JSX you 
need curly braces, hence, { {width: 193} }


# stoppropagation-v/s-preventdefault
https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault

# ISSUES
1. combineReducer was not working...
Sol: I was not reading store from reducerName... 
counterReducer.counter
searchReducer.data.items


