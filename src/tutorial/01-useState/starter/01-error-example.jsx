const ErrorExample = () => {
  let count = 0;
  function handleClick() {
    count = count + 1;
    console.log(count);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" type="button" onClick={handleClick}>
        increment
      </button>
    </div>
  );
};

export default ErrorExample;
