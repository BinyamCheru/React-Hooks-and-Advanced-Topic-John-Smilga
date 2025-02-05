import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const intId = setInterval(() => {
      // console.log("Hello from the interval");
    }, 1000);
    // console.log("How many times am going to be displayed?");
    return () => {
      clearInterval(intId);
      console.log("cleanup");
    };
  }, []);
  return <h2>Hello there!</h2>;
};

export default CleanupFunction;
