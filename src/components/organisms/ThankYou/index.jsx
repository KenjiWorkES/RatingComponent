import React from "react";
import ThankYouHeader from "../../molecules/ThankYouHeader";
import ThankYouContent from "../../molecules/ThankYouContent";

import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thank-you">
      <ThankYouHeader></ThankYouHeader>
      <ThankYouContent></ThankYouContent>
    </div>
  );
};

export default ThankYou;
