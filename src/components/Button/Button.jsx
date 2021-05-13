import React from "react";

import "./Button.css";

const STYLES = [
  "btn--primary--normal",
  "btn--primary--destructive",
  "btn--secondary--normal",
  "btn--secondary--destructive",
  "btn--subtle--normal",
  "btn--subtle--destructive",
];

const Button = ({ children, onClick, buttonStyle, disabled, isLoading }) => {
  const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  return (
    <button
      className={`btn ${checkBtnStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {!isLoading && children}
      {isLoading && <div className="loader"></div> }
    </button>
  );
};

export default Button;
