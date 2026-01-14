import { useState } from "react";

const Popup = () => {
  const [isvisivle, setisvisible] = useState(false);

  const handlevisiviliti = () => {
    setisvisible((prev) => !prev);
  };
  return (
    <div>
      <h1>welcome</h1>
      <div></div>
      <button className="btn" onClick={handlevisiviliti}>
        Show/hide
      </button>
      {isvisivle && <p>succses</p>}
    </div>
  );
};

export default Popup;
