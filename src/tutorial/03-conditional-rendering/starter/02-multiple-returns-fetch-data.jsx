import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // done fetching data
      setLoading(false);
    }, 3000);
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return <h2>Data Loaded</h2>;
};
export default MultipleReturnsFetchData;
