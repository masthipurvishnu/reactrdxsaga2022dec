import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const swap = () => {
    const intArray = [12, 3, 4, 2, 6, 5, 10];
    // const newArray = intArray.map((item, i) => {
    //   return intArray.sort((a, b) => a - b)[intArray.length - 1 - i];
    // });
    // console.log(intArray.sort((a, b) => a - b)[0]);
    // console.log(intArray.sort((a, b) => b - a)[0]);
    // console.log(newArray);
    const min = intArray.sort((a, b) => a - b)[0];
    const max = intArray.sort((a, b) => b - a)[0];
    console.log(intArray);
    const minIndex = intArray.indexOf(min);
    const maxIndex = intArray.indexOf(max);
    console.log(min, max, minIndex, maxIndex);
    const x = intArray.splice();
  };
  return (
    <div>
      <p>{"counter"}</p>

      <button onClick={increment}>{"Increment"}</button>
      <div>{counter}</div>
      <button onClick={decrement}>{"Decrement"}</button>
      <p>{"Swap"}</p>
      <button onClick={swap}>Swap</button>
    </div>
  );
};
export default Counter;
