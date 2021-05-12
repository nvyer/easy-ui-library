import React from "react";

import "./Button.css";

const STYLES = [
  "btn--primary--normal",
  "btn--primary--destructive",
  "btn--secondary--normal",
];

const Button = ({ children, onClick, buttonStyle, disabled }) => {
  const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

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
