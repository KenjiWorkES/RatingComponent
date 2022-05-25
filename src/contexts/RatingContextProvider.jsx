import React, { useState } from "react";

import RatingContext from "./rating-context";

const RatingContextProvider = (props) => {
  const [result, setResult] = useState();
  const [isRating, setIsRating] = useState();

  const getResultHandler = (event) => {
    setResult(event.target.id);
    console.log(result);
  };

  const submitResultHandler = () => {
    setIsRating(true);
    console.log(isRating);
  };

  const ratingData = {
    result: result,
    isRating: isRating,
    setResult: getResultHandler,
    setISRating: submitResultHandler,
  };

  return (
    <RatingContext.Provider value={ratingData}>
      {props.children}
    </RatingContext.Provider>
  );
};

export default RatingContextProvider;
