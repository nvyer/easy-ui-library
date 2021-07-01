import React from "react";
import Button from "../components/Button/Button";

const ButtonStory = () => {
  const primaryButton = `
  <Button
    onClick={(e) => console.log(e)}
    buttonStyle="btn--primary--normal"
      >Easy-UI
  </Button>
  `;

  const destructiveButton = `
  <Button
    onClick={(e) => console.log(e)}
    buttonStyle="btn--primary--destructive"
      >Easy-UI
  </Button>
  `;

  const secondaryNormalButton = `
  <Button
    onClick={(e) => console.log(e)}
    buttonStyle="secondary--normal"
      >Easy-UI
  </Button>
  `;

  const secondaryDestructiveButton = `
  <Button
    onClick={(e) => console.log(e)}
    buttonStyle="secondary--destructive"
      >Easy-UI
  </Button>
  `;

  const subtleNormalButton = `
  <Button
    onClick={(e) => console.log(e)}
    buttonStyle="subtle--normal"
      >Easy-UI
  </Button>
  `;

  const subtleDestructiveButton = `
  <Button
    onClick={(e) => console.log(e)}
    buttonStyle="subtle--destructive"
      >Easy-UI
  </Button>
  `;

  const isLoadingButton = `
  <Button
    onClick={(e) => console.log(e)}
    isLoading
      >Easy-UI
  </Button>
  `;

  const disabledButton = `
  <Button
    onClick={(e) => console.log(e)}
    disabled
      >Easy-UI
  </Button>
  `;

  return (
    <>
      <p style={{ fontWeight: 700 }}>
        Props: onClick, buttonStyle, disabled, isLoading
      </p>
      <div className="component-container">
        <p className="component-title">Primary Normal</p>
        <Button buttonStyle="btn--primary--normal">Easy-UI</Button>
        <pre className="component-code long">{primaryButton}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Primary Destructive</p>
        <Button buttonStyle="btn--primary--destructive">Easy-UI</Button>
        <pre className="component-code long">{destructiveButton}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Secondary Normal</p>
        <Button buttonStyle="btn--secondary--normal">Easy-UI</Button>
        <pre className="component-code long">{secondaryNormalButton}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Secondary Destructive</p>
        <Button buttonStyle="btn--secondary--destructive">Easy-UI</Button>
        <pre className="component-code long">{secondaryDestructiveButton}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Subtle Normal</p>
        <Button buttonStyle="btn--subtle--normal">Easy-UI</Button>
        <pre className="component-code long">{subtleNormalButton}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Subtle Destructive</p>
        <Button buttonStyle="btn--subtle--destructive">Easy-UI</Button>
        <pre className="component-code long">{subtleDestructiveButton}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Loading</p>
        <Button isLoading>Easy-UI</Button>
        <pre className="component-code long">{isLoadingButton}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Disabled</p>
        <Button disabled>Easy-UI</Button>
        <pre className="component-code long">{disabledButton}</pre>
      </div>
    </>
  );
};

export default ButtonStory;
