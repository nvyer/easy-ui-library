import React from "react";

import "./Input.css";

const TextFieldInput = ({
  label,
  variant,
  type,
  required,
  disabled,
  readOnly,
  defaultValue,
  helperText,
}) => {
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
    <div className="input-container-box">
      <br />
      <div className="input-box">
        <input
          type={type ? type : "text"}
          className={`input ${variantStyle}`}
          placeholder={" "}
          disabled={disabled}
          {...(readOnly && { readOnly })}
          defaultValue={defaultValue}
        />
        <label className={labelType}>
          {label}
          {required && " *"}
        </label>
      </div>
      <span className="helper-text">{helperText}</span>
    </div>
  );
};

export default TextFieldInput;
