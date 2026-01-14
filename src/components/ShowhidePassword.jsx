import { useState } from "react";

const ShowhidePassword = () => {
  const [hidetext, sethideext] = useState(false);

  const handleText = () => {
    sethideext((prev) => !prev);
  };
  return (
    <div>
      <input type={hidetext ? "text" : "password"} />
      <div>
        <button onClick={handleText}>Show/hide Password</button>
      </div>
    </div>
  );
};

export default ShowhidePassword;
