import { useState } from "react";

const ToggleChallenge = () => {
  const [isTrue, setIsTrue] = useState(true);

  const handleClick = () => {
    isTrue ? setIsTrue(false) : setIsTrue(true);
  };
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        Toggle
      </button>
      {isTrue ? <SomeComponent /> : <h2>Hello</h2>}
    </div>
  );
};

const SomeComponent = () => {
  return (
    <div>
      <h2>Render the component</h2>
    </div>
  );
};
export default ToggleChallenge;
