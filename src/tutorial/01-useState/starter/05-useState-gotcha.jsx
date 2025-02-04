import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      console.log("Button clicked");
      setValue((currentValue) => {
        return currentValue + 1;
      });
    }, 3000);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        Increment
      </button>
    </div>
  );
};

export default UseStateGotcha;
