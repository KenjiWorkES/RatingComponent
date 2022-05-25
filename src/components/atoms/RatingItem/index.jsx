import React from "react";
import "./RatingItem.css";

const RatingItem = (props) => {
  return <button className="rating__item">{props.children}</button>;
};

export default RatingItem;
