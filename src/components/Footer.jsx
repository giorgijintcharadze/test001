import React from "react";

const Footer = ({ name, secondname, img }) => {
  return (
    <>
      <div>
        {name} , {secondname}
        <img src={img} alt={img} />
      </div>
    </>
  );
};

export default Footer;
