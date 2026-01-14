import { useState } from "react";

const Onchange = () => {
  const [text, settext] = useState("");

  const handletext = (event) => {
    settext(event.target.value);

    console.log(text);
  };
  return (
    <div>
      <input type="text" onChange={handletext} />
      <div>
        <p>you typed: {text}</p>
      </div>
    </div>
  );
};

export default Onchange;
