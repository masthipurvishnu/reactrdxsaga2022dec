import React, { createContext } from "react";
import "./App.css";

import Main from "./Main";
import Portal from "./Portal";

export const CountContext = createContext();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Main />
        {/* <Portal /> */}
      </>
    );
  }
}
export default App;
