import React from "react";

import "./Button.css";

const STYLES = [
  "btn--primary--normal",
  "btn--primary--destructive",
  "btn--secondary--normal",
  "btn--secondary--destructive",
];

const Button = ({ children, onClick, buttonStyle, disabled }) => {
  const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  console.log(disabled);
  return (
    <button
      className={`btn ${checkBtnStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
