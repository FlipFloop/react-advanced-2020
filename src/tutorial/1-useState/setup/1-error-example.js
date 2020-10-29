import { render } from "@testing-library/react";
import React from "react";

const ErrorExample = () => {
  let title = "My title";

  const handleClick = () => {
    title = 'New title!'
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
