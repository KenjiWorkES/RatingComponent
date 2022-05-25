import React from "react";
import StarImg from "../../../../public/assets/icon-star.svg";

import "./Star.css";

const Star = () => {
  return (
    <div className="rating__star">
      <img className="rating__star__image" src={StarImg} alt="" />
    </div>
  );
};

export default Star;
