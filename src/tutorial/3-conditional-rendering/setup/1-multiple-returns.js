import React, { useState, useEffect } from "react";

const MultipleReturns = () => {
  const url = "https://api.github.com/users/QuincyLarsons";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if(res.status >= 200 && res.status <= 300) {
          return res.json();
        } else {
          setIsLoading(false)
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
        console.log(user);
      })
      .catch((e) => {
        setIsLoading(false);
        setIsError(true);
        console.log(e);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }
  return (
    <>
      <div>
        <h2>{user}</h2>
      </div>
    </>
  );
};

export default MultipleReturns;
