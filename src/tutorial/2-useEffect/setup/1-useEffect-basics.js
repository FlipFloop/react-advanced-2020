import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    if (value >= 1) {
      document.title = `New Message(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("hey guys");
  }, []);

  console.log("render");

  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Change Title
      </button>
    </>
  );
};

export default UseEffectBasics;
