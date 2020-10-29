import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Victor",
    age: 19,
    message: "Random message",
  });

  const [name, setName] = useState('Victor')
  const [age, setAge] = useState(19)
  const [message, setMessage] = useState('Random message')

  const changeMessage = () => {
    // setPerson({...person, message:'Hello guys'});
    setMessage('Hey guys');
  }

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>Change the message</button>
    </>
  );
};

export default UseStateObject;
