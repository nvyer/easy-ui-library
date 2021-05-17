import React from "react";

import "./Input.css";

const TextFieldInput = ({ label, placeholder }) => {
  return (
    <div>
      <h1>Input</h1>
      <br />
      <div className="main--container">
        <input
          type="text"
          className="standard--input"
          placeholder={`${placeholder}`}
        />
        <label className="input--label">{label}</label>
      </div>
    </div>
  );
};

export default TextFieldInput;
