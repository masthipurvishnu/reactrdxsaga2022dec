import React, { useContext, useEffect, useMemo } from "react";
import { Card, CardContent } from "@mui/material";

import { CountContext } from "../../App";
import { connect, useSelector } from "react-redux";
import { DogContext } from "./Dog";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
const DogDetails = (props) => {
  // const name = useContext(CountContext)
  const name = useContext(DogContext);
  const cardStyles = {
    textAlign: "center",
    height: "200px",
    width: "600px",
    margin: "10px",
  };
  const divStyle = {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  };
  const dog = useSelector((state) => state.dogsReducer.dog);
  //this is only for quick test on useeffect and usememo with empty dependency
  useEffect(() => {
    // console.log(props?.name);
  }, []);
  const n1 = useMemo(() => {
    // console.log(props?.name);
    return props?.name;
  }, []);
  return (
    <>
      <div style={divStyle}>
        vv2 - {n1}
        <Card
          sx={{
            fontSize: 14,
            border: "0px solid red",
            textAlign: "center",
          }}
          style={cardStyles}
        >
          <div>Dog details </div>
          <CardContent sx={{ fontSize: 12 }}>Name: {name}</CardContent>{" "}
          {/* name comming from context */}
          <CardContent sx={{ fontSize: 12 }}>URL: {dog}</CardContent>{" "}
          {/* url comming from reducer through useSelector */}
          {/* <CardContent sx={{ fontSize: 12 }}>Name: {props.dog}</CardContent> */}
        </Card>
      </div>
    </>
  );
};
// const mapStateToProps = state => {
//     return {
//         dog: state.dog
//     }
// }
// export default connect(mapStateToProps, null)(DogDetails)
// export default connect(null, null)(DogDetails) // this also works same as below line
export default DogDetails;
