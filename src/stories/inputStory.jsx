import React from "react";
import TextFieldInput from "../components/Input/Input";

const TextFieldInputStory = () => {
  const standardInput = `<TextFieldInput placeholder="Type text..." variant="standart"/>`;
  const filledInput = `<TextFieldInput placeholder="Type text..." variant="filled"/>`;
  const outlinedInput = `<TextFieldInput placeholder="Type text..." variant="outlined" label="Text" helperText="Text..."/>`;
  const disabledInput = `<TextFieldInput placeholder="Type text..." variant="outlined" label="Text" disabled/>`;
  const requiredInput = `<TextFieldInput placeholder="Type text..." variant="outlined" label="Text" required />`;
  const errorInput = `<TextFieldInput placeholder="Type text..." variant="filled" error/>`;

  return (
    <>
      <p style={{ fontWeight: 700 }}>
        Props: className, label, variant, required, disabled, readOnly,
        defaultValue, helperText, error, placeholder, onChange, value, id
      </p>
      <div className="component-container">
        <p className="component-title">Standard</p>
        <TextFieldInput placeholder="Type text..." variant="standard" />
        <pre className="component-code">{standardInput}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Filled, Label</p>
        <TextFieldInput
          placeholder="Type text..."
          variant="filled"
          label="Text"
        />
        <pre className="component-code">{filledInput}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Outlined, Label, HelperText</p>
        <TextFieldInput
          placeholder="Type text..."
          variant="outlined"
          label="Text"
          helperText="Text..."
        />
        <pre className="component-code">{outlinedInput}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Disabled</p>
        <TextFieldInput
          placeholder="Type text..."
          variant="outlined"
          label="Text"
          disabled
        />
        <pre className="component-code">{disabledInput}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Required</p>
        <TextFieldInput
          placeholder="Type text..."
          variant="outlined"
          label="Text"
          required
        />
        <pre className="component-code">{requiredInput}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Error</p>
        <TextFieldInput placeholder="Type text..." variant="filled" error />
        <pre className="component-code">{errorInput}</pre>
      </div>
    </>
  );
};

export default TextFieldInputStory;
