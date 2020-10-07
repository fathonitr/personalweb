import React, { useState } from "react";

import "./works.css";
const Works = () => {
  const [inHover, setHover] = useState(false);
  return (
    <div className="home">
      <div className="container">
      <p>Photographer</p>
      <p>Web Developer</p>
      </div>
      
    </div>
  );
};

export default Works;
