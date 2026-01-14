import { useState } from "react";

const IncrimentDecriment = () => {
  const [count, setCount] = useState(0);

  // const handlecount = (prev) => {
  //   setCount(count + 1);
  // };

  const handleminescount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="mainContainer">
        <div className="container">
          {/* <Heder /> */}
          <h1>{count}</h1>
          <button onClick={() => setCount((prev) => prev + 1)}>
            incriment
          </button>
          <div></div>
          <button onClick={handleminescount}>decriment</button>
        </div>
      </div>
    </>
  );
};

export default IncrimentDecriment;
