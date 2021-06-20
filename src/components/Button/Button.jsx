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
  let checkLoaderStyle;
  switch (buttonStyle) {
    case "btn--primary--normal":
      checkLoaderStyle = "primary--normall";
      break;
    case "btn--primary--destructive":
      checkLoaderStyle = "primary--destructive";
      break;
    case "btn--secondary--normal":
      checkLoaderStyle = "secondary--normal";
      break;
    case "btn--secondary--destructive":
      checkLoaderStyle = "secondary--destructive";
      break;
    case "btn--subtle--normal":
      checkLoaderStyle = "subtle--normal";
      break;
    case "btn--subtle--destructive":
      checkLoaderStyle = "subtle--destructive";
      break;
    default:
      checkLoaderStyle = "primary--normall";
      break;
  }

  return (
    <button
      className={`btn ${checkBtnStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {!isLoading && children}
      {isLoading && <div className={`loader ${checkLoaderStyle}`}></div>}
    </button>
  );
};

export default Button;
