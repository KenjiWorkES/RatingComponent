import React from "react";

import "./Paragraph.css";

const Paragraph = (props) => {
  const classes = "paragraph " + props.className;

  return <p className={classes}>{props.children}</p>;
};

export default Paragraph;
