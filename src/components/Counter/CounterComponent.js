import React from "react";
import { Grid } from "@mui/material";
import Counter from "./Counter";
import CounterClass from "./CounterClass";
import VButton from "../CustomHook/VButton";
import CustomForm from "../refs/CustomForm";
import ParentComponent from "../Parent";
import Child1 from "../Child1";
import Child2 from "../Child2";
import ErrorBoundray from "../ErrorBoundary/ErrorBoundary";
import CounterPureComponent from "../PureComponents/Counter";
import TodoList from "./TodoList";
import TodoApp from "./TodoApp";
import TodoApp2 from "./TodoApp2";
const CounterComponent = () => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid border={"1px solid green"} margin={2} item xs>
          COUNTER - fn
          <Grid rowSpacing={2}>
            <ErrorBoundray>
              <CounterClass />
            </ErrorBoundray>
          </Grid>
          <Grid>
            <CounterPureComponent />
          </Grid>
        </Grid>
        <Grid border={"1px solid orange"} margin={2} item xs={4}>
          <Counter />
        </Grid>
        <Grid border={"1px solid red"} margin={2} item xs>
          <div>
            <VButton />
            <CustomForm />
          </div>
        </Grid>
      </Grid>
      <div
        style={{
          display: "inline-block",
          float: "right",
          margin: "20px",
          border: "11px solid red",
          height: 300,
          width: 300,
        }}
      >
        <TodoApp2 />
      </div>
      <div
        style={{
          display: "inline-block",
          border: "4px solid red",
          margin: "20px",
        }}
      >
        <ParentComponent flag={true} />
      </div>
      <div style={{ display: "inline-block", border: "1px solid green" }}>
        <ParentComponent flag={false}>
          <Child1 name={"Raja"} />
          <Child2 location={"Irving"} />
        </ParentComponent>
      </div>
      <div
        style={{
          display: "inline-block",
          float: "right",
          margin: "20px",
          border: "1px solid blue",
          height: 300,
          width: 300,
        }}
      >
        <TodoApp />
      </div>
    </>
  );
};
export default CounterComponent;
