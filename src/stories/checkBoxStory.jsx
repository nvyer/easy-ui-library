import React from "react";
import CheckBox from "../components/CheckBox/checkBox";

const CheckBoxStory = () => {
  const basicCheckBox = `<CheckBox />`;
  const secondaryCheckBox = `<CheckBox color="secondary"/>`;
  const checked = `<CheckBox checked />`;
  const disabled = `<CheckBox disabled checked />`;
  const indeterminate = `<CheckBox indeterminate />`;
  const accessibility = `<CheckBox
    className="customClassName"
    value="checkedA"
    onChange={(e) => console.log(e.target.value)}
    />`;

  return (
    <div>
      <p style={{ fontWeight: 700 }}>
        Props: className, color(primary,secondary), value, checked,
        indeterminate, onChange,disabled
      </p>
      <div className="component-container">
        <p className="component-title">Default</p>
        <CheckBox />
        <span className="component-code">{basicCheckBox}</span>
      </div>
      <div className="component-container">
        <p className="component-title">Secodary</p>
        <CheckBox color="secondary" />
        <span className="component-code">{secondaryCheckBox}</span>
      </div>
      <div className="component-container">
        <p className="component-title">Checked</p>
        <CheckBox checked />
        <span className="component-code">{checked}</span>
      </div>
      <div className="component-container">
        <p className="component-title">Disabled and Checked</p>
        <CheckBox disabled checked />
        <span className="component-code">{disabled}</span>
      </div>
      <div className="component-container">
        <p className="component-title">Indeterminate</p>
        <CheckBox indeterminate />
        <span className="component-code">{indeterminate}</span>
      </div>
      <div className="component-container">
        <p className="component-title">Accessibility</p>
        <CheckBox
          onChange={(e) => console.log(e.target.value)}
          value="checkedA"
        />
        <pre className="component-code long">{accessibility}</pre>
      </div>
    </div>
  );
};

export default CheckBoxStory;
