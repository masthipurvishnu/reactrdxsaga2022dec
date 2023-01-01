# 
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
p
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
### what is render prop and what is it good for?
DetectHover1 & Header => HOC
DetectHover2 & Footer => render props ---?
(render props looks like old react way.. still we can use them here and there..)

### What are hooks and what problems it can solve?
Hooks are life cycle methods. To find state, didMound, Didupdate etc 


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

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
