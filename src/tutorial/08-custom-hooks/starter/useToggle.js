import { useState } from "react";

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);
  const toggle = () => {
    setShow(!show);
    // if (show === true) {
    //   setShow(false);
    // } else {
    //   setShow(true);
    // }
  };
  return { show, toggle };
};

export default useToggle;
