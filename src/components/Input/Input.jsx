import React from "react";

import "./Input.css";

const TextFieldInput = ({ label, variant, type }) => {
  let variantStyle, labelType;
  switch (variant) {
    case "filled":
      variantStyle = "basic--filled--input";
      labelType = "input--label--filled";
      break;
    case "outlined":
      variantStyle = "basic--outlined--input";
      labelType = "input--label--outlined";
      break;
    default:
      variantStyle = "basic--standard--input";
      labelType = "input--label--standard";
  }

  return (
    <div>
      <h1>Input</h1>
      <br />
      <div className="main--container">
        <input
          type={type ? type : "text"}
          className={`input ${variantStyle}`}
          placeholder={" "}
        />
        <label className={labelType}>{label}</label>
      </div>
    </div>
  );
};

export default TextFieldInput;
