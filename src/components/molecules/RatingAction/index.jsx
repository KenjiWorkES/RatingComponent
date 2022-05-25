import React, { useState, useContext } from "react";

import "./RatingAction.css";
import RatingItem from "../../atoms/RatingItem";
import { Button } from "../../atoms";
import RatingContext from "../../../contexts/rating-context";

const RatingAction = () => {
  const ratingItems = ["1", "2", "3", "4", "5"];
  const ratingCtx = useContext(RatingContext);

  const ratingHandler = (event) => {
    event.preventDefault();
    ratingCtx.setResult(event);
  };

  const submitRatingHandler = (event) => {
    event.preventDefault();
    ratingCtx.setISRating();
  };

  return (
    <form className="rating__action">
      <div className="rating__action__numbers">
        {ratingItems.map((ratingItem) => (
          <RatingItem
            className={
              ratingCtx.result === ratingItem && "rating__item--active"
            }
            key={ratingItem}
            onRating={ratingHandler}
            id={ratingItem}
          >
            {ratingItem}
          </RatingItem>
        ))}
      </div>
      <div className="rating__action__button">
        <Button onClick={submitRatingHandler}>SUBMIT</Button>
      </div>
    </form>
  );
};

export default RatingAction;
