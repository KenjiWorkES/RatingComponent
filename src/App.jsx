import React, { useContext, useState } from "react";
import "./App.css";
import RatingTemplate from "./components/templates/RatingTemplate";
import ThankYouTemplate from "./components/templates/ThankYouTemplate";
import RatingContext from "./contexts/rating-context";

function App() {
  const ratingCtx = useContext(RatingContext);

  return (
    <>
      {!ratingCtx.isRating && <RatingTemplate></RatingTemplate>}
      {ratingCtx.isRating && <ThankYouTemplate></ThankYouTemplate>}
    </>
  );
}
export default App;
