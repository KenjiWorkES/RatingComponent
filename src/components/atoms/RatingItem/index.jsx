import React from "react";
import "./RatingItem.css";

const RatingItem = (props) => {
  return (
    <button id={props.id} onClick={props.onRating} className="rating__item">
      {props.children}
    </button>
  );
};

export default RatingItem;
