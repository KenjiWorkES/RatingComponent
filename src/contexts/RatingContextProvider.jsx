import React from "react";

import RatingContext from "./rating-context";

const RatingContextProvider = () => {
  const ratingData = {
    result: 0,
    isRating: false,
  };

  return <RatingContext.Provider value={ratingData}></RatingContext.Provider>;
};

export default RatingContextProvider;
