import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsy
  const [text,setText] = useState("")
  // truthy
  const [name,setName] = useState("Susan")

  const codeExample = text || "Hello world"


  return (
    <div>
      {/* if(condition){This won't work} */}
      <h4>Falsy OR: {text || "Hello World"}</h4>
      <h4>Falsy AND: {text && "Hello World"}</h4>
      <h4>Truthy OR: {name || "Hello World"}</h4>
      <h4>Truthy AND: {name && "Hello World"}</h4>
      {codeExample}
    </div>
  );
};
export default ShortCircuitOverview;
