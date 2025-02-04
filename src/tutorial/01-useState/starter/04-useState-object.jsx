import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("read books");
  const showJohn = () => {
    setName("John");
    setAge(28);
    setHobby("scream at the computer show john");
  };
  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys To: {hobby}</h4>
      <button className="btn" onClick={showJohn}>
        Show John
      </button>
    </div>
  );
};

export default UseStateObject;
