import React from "react";

import "./Button.css";

const Button = (props) => {
  return <button className="submit-button">{props.children}</button>;
};

export default Button;
