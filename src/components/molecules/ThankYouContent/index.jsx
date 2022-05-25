import React from "react";

import "./ThankYouContent.css";
import Title from "../../atoms/Title";
import Paragraph from "../../atoms/Paragraph";

const ThankYouContent = () => {
  return (
    <>
      <Title>Thank You!</Title>
      <Paragraph>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </Paragraph>
    </>
  );
};

export default ThankYouContent;
