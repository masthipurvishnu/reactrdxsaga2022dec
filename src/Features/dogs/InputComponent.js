import React, { useEffect, useRef, useState } from "react";

const InputComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef("");
  const renderCount = useRef(1);
  useEffect(() => {
    console.log(inputRef.current);
    renderCount.current += 1;
  });

  useEffect(() => {
    console.log(inputRef.current.value);
  }, [renderCount.current.value]);
  const handleChange = (e) => {
    inputRef.current = e.target.value;
    console.log(inputRef.current);
  };
  const handleClick = () => {
    setInputValue(inputRef.current);
  };
  return (
    <>
      <p style={{ color: "red", fontWeight: "bold" }}>Input REF Component</p>
      <div>
        <div>
          <input ref={inputRef} onChange={handleChange} />
          <button onClick={handleClick}>Send</button>
          <p>
            My name is <strong>{inputValue}</strong>
          </p>
          <p>I rendered {renderCount.current}</p>
        </div>
      </div>
    </>
  );
};

export default InputComponent;
