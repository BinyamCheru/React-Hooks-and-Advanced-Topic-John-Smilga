import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState());
  // console.log(useState("Current value"));
  // console.log(useState(0));
  // const value = useState("Hello")[0];
  // const func = useState()[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);
  const handleClick = () => {
    // console.log(count);
    setCount(count + 1);
    // be careful, we can set any value
    // setCount('pants');
  };
  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={handleClick}>
        increment
      </button>
    </div>
  );
};

export default UseStateBasics;
