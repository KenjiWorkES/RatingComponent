import React from "react";

import "./RatingAction.css";
import RatingItem from "../../atoms/RatingItem";
import Button from "../../atoms/Button";

const RatingAction = () => {
  return (
    <div className="rating__action">
      <div className="rating__action__numbers">
        <RatingItem>1</RatingItem>
        <RatingItem>2</RatingItem>
        <RatingItem>3</RatingItem>
        <RatingItem>4</RatingItem>
        <RatingItem>5</RatingItem>
      </div>
      <div className="rating__action__button">
        <Button>SUBMIT</Button>
      </div>
    </div>
  );
};

export default RatingAction;
