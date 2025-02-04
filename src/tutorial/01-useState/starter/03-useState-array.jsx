import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    // console.log(id);
    // const newPeople = people.filter((person) => person.id !== id);
    setPeople(people.filter((person) => person.id !== id));
  };
  // const clearAllItems = () => {
  //   setPeople([]);
  // };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => setPeople([])}
        style={{ marginTop: "2rem" }}
      >
        Clear Items
      </button>
    </div>
  );
};

export default UseStateArray;
