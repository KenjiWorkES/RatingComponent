import React from "react";
import "./RatingHeader.css";
import Title from "../../atoms/Title";
import Paragraph from "../../atoms/Paragraph";

const RatingHeader = () => {
  return (
    <div className="rating__header">
      <Title>How did we do?</Title>
      <Paragraph>
        Please let us know how we did your support request . All feedback is
        appreciated to help us improve our offering
      </Paragraph>
    </div>
  );
};

export default RatingHeader;
