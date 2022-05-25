import React, { useContext } from "react";
import RatingContext from "../../../contexts/rating-context";

import "./RatingResult.css";

const RatingResult = () => {
  const ratintCtx = useContext(RatingContext);

  return (
    <div className="thank-you__result">
      <p className="thank-you__result__text">
        You selected {ratintCtx.result} out o 5
      </p>
    </div>
  );
};

export default RatingResult;
