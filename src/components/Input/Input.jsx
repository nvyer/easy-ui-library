import React, { useRef } from "react";

import "./Input.css";

const TextFieldInput = ({ label, placeholder }) => {
  const inputFocus = useRef(null);
  const onLabelFocus = () => {
    inputFocus.current.focus();
  };

  return (
    <div>
      <h1>Input</h1>
      <br />
      <div className="main--container">
        <input
          type="text"
          className="standard--input"
          placeholder={`${placeholder}`}
          ref={inputFocus}
        />
        <label className="input--label" onFocus={onLabelFocus}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default TextFieldInput;
