import React from "react";
import "./Title.css";

const Title = (props) => {
  const classes = "title " + props.className;

  return <h1 className={classes}>{props.children}</h1>;
};

export default Title;
