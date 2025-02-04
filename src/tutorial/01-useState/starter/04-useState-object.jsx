import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    hobby: "Read Books",
  });
  // const [name, setName] = useState("peter");
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState("read books");
  const showJohn = () => {
    setPerson({
      name: "John",
      age: 28,
      hobby: "Scream at the computer",
    });
    // be careful, don't overwrite
    // setPerson("shakeAndBake");
    // setPerson({name: "Susan"})
    // setPerson({ ...person, name: "Susan" });
  };
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys To: {person.hobby}</h4>
      <button className="btn" onClick={showJohn}>
        Show John
      </button>
    </div>
  );
};

export default UseStateObject;
