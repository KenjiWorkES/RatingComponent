import React, { useState } from "react";

import "./RatingAction.css";
import RatingItem from "../../atoms/RatingItem";
import Button from "../../atoms/Button";

const RatingAction = () => {
  const ratingItems = ["1", "2", "3", "4", "5"];
  const [ratingLevel, setRatingLevel] = useState();

  const ratingHandler = (event) => {
    setRatingLevel(event.target.id);
    console.log(event.target.id);
  };

  return (
    <div className="rating__action">
      <div className="rating__action__numbers">
        {ratingItems.map((ratingItem) => (
          <RatingItem key={ratingItem} onRating={ratingHandler} id={ratingItem}>
            {ratingItem}
          </RatingItem>
        ))}
      </div>
      <div className="rating__action__button">
        <Button>SUBMIT</Button>
      </div>
    </div>
  );
};

export default RatingAction;
