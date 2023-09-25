import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterValue = () => {
  const [counter, setCounter] = useState();
  const dispatch = useDispatch();
  const counterValue = useSelector(
    (state) => state.counterValueReducer.counter
  );
  useEffect(() => {
    dispatch({ type: "GET_COUNTER_REQUEST" });
  }, []); //compomentDidMount and ComponentDidUpdate,
  //this calls only once for render/rerender
  useEffect(() => {
    // setCounter(counterValue => counterValue);
  }, [counterValue]);
  const onIncrementClicked = () => {
    dispatch({ type: "INCREMENT_COUNTER_REQUEST", counter: counterValue });
  };
  const onDecrementClicked = () => {
    dispatch({ type: "DECREMENT_COUNTER_REQUEST", counter: counterValue });
  };
  return (
    <>
      <p>{"CounterValue"}</p>
      <button onClick={onIncrementClicked}>{"Increment"}</button>
      <span style={{ padding: 5 }}>{counterValue}</span>
      <button onClick={onDecrementClicked}>{"Decrement"}</button>
    </>
  );
};

export default CounterValue;
