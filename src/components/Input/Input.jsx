import React from "react";

import "./Input.css";

const TextFieldInput = ({
  label,
  variant,
  type,
  required,
  disabled,
  readonly,
  value,
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
    <div>
      <br />
      <div>
        <input
          type={type ? type : "text"}
          className={`input ${variantStyle}`}
          placeholder={" "}
          disabled={disabled}
          {...(readonly && { readonly })}
          value={value}
        />
        <label className={labelType}>
          {label}
          {required && " *"}
        </label>
        <div className="helper-text">{helperText && helperText}</div>
      </div>
    </div>
  );
};

export default TextFieldInput;
