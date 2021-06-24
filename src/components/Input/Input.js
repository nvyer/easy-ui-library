import React from "react";
import PropTypes from 'prop-types';
import "./Input.css";

const TextFieldInput = ({
  label,
  variant,
  required,
  disabled,
  readOnly,
  defaultValue,
  helperText,
  error,
  placeholder,
  onChange
}) => {
  return (
    <div className="container">
      <input
        onChange={onChange}
        type={"text"}
        className={error ? `${variant} error` : `${variant}`}
        placeholder={placeholder}
        disabled={disabled}
        {...(readOnly && { readOnly })}
        defaultValue={defaultValue}
      />
      <label
        className={error ? `${variant}-text error` : `${variant}-text`}
        style={placeholder ? { transform: variant === "outlined" ? "translateY(-4.3em)" : "translateY(-3.3em)", fontSize: "0.90em" } : {}}
      >
        {label}
        {required && " *"}
      </label>
      {helperText && <span className={error ? "helper-text error" : "helper-text"}>{helperText}</span>}
    </div >
  );
};

TextFieldInput.defaultProps = {
  variant: "standard"
};

TextFieldInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func
};

export default TextFieldInput;
