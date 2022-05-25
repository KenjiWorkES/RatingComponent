import React from "react";

import "./ThankYouContent.css";
import Title from "../../atoms/Title";
import Paragraph from "../../atoms/Paragraph";

const ThankYouContent = () => {
  return (
    <>
      <Title className="title--center">Thank You!</Title>
      <Paragraph className="paragraph--center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </Paragraph>
    </>
  );
};

export default ThankYouContent;
