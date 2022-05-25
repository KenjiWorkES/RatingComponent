import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button type="submit" onClick={props.onClick} className="submit-button">
      {props.children}
    </button>
  );
};

export default Button;
