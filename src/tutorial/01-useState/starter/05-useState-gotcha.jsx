import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue((currentValue) => {
      const newValue = currentValue + 1;
      console.log(newValue);
      return newValue;
    });
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
