import React from "react";
import RatingHeader from "../../molecules/RatingHeader";
import RatingAction from "../../molecules/RatingAction";
import "./Rating.css";

const Rating = () => {
  return (
    <div className="rating">
      <RatingHeader></RatingHeader>
      <RatingAction></RatingAction>
    </div>
  );
};

export default Rating;
