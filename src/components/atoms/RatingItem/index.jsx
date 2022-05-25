import React from "react";
import "./RatingItem.css";

const RatingItem = (props) => {
  const classes = "rating__item " + props.className;

  const activeRatingHandler = (event) => {
    props.onRating(event);
  };

  return (
    <button id={props.id} onClick={activeRatingHandler} className={classes}>
      {props.children}
    </button>
  );
};

export default RatingItem;
