import React from "react";

const RatingContext = React.createContext({
  result: 0,
  isRating: false,
  setResult: () => {},
  setISRating: () => {},
});

export default RatingContext;
