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
  error,
}) => {
  let variantStyle, labelType;
  let helperStyle = "helper-text";

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

  if (error) {
    labelType += " error";
    helperStyle += " error";
    variantStyle += " error";
  }

  return (
    <div className="input-container-box">
      <br />
      <div>
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
      <span className={helperStyle}>{helperText}</span>
    </div>
  );
};

export default TextFieldInput;
