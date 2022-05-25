import React from "react";

import "./RatingAction.css";
import RatingItem from "../../atoms/RatingItem";

const RatingAction = () => {
  return (
    <div className="rating__action">
      <RatingItem>1</RatingItem>
      <RatingItem>2</RatingItem>
      <RatingItem>3</RatingItem>
      <RatingItem>4</RatingItem>
      <RatingItem>5</RatingItem>
    </div>
  );
};

export default RatingAction;
