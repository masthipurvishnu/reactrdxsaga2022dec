import React, { useEffect, useRef, useState } from "react";
import useInput from "./uesInput";

const AgeComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
  });
  const onTextChange = (e) => {
    console.log(e?.target?.value);
    setInputValue(e?.target?.value);
  };
  const handleClick = () => {};
  return (
    <>
      AgeComponent
      <div>
        <input value={inputValue} onChange={onTextChange} />
        <button onClick={handleClick}>Send</button>
        <p>Age: {inputValue}</p>
        <p>I rendered - {renderCount.current}</p>
      </div>
    </>
  );
};

export default AgeComponent;
