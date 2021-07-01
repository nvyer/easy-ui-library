import React from "react";
import DropDown from "../components/DropDown/dropdown";

const DropDownStory = () => {
  const primaryDropDown = `<DropDown dropDownTitle="Site">
          <a id={1} href="https://www.google.com/">Google</a>
          <a id={2} href="https://www.facebook.com/">Facebook</a>
        </DropDown>`;

  const destructiveDropDown = `<DropDown dropDownTitle="Site" dropDownStyle="dropdown--destructive">
        <a id={1} href="https://www.google.com/">Google</a>
        <a id={2} href="https://www.facebook.com/">Facebook</a>
      </DropDown>`;

  const neutralDropDown = `<DropDown dropDownTitle="Site" dropDownStyle="dropdown--neutral">
      <a id={1} href="https://www.google.com/">Google</a>
      <a id={2} href="https://www.facebook.com/">Facebook</a>
      </DropDown>`;

  const searchDropDown = `<DropDown dropDownTitle="Site" search>
      <a id={1} href="https://www.google.com/">Google</a>
      <a id={2} href="https://www.facebook.com/">Facebook</a>
      </DropDown>`;

  return (
    <>
      <p style={{ fontWeight: 700 }}>
        Props: dropDownTitle, dropDownStyle, search
      </p>
      <div className="component-container">
        <p className="component-title">Primary</p>
        <DropDown dropDownTitle="Site">
          <a id={1} href="https://www.google.com/">
            Google
          </a>
          <a id={2} href="https://www.facebook.com/">
            Facebook
          </a>
        </DropDown>
        <pre className="component-code">{primaryDropDown}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Destructive</p>
        <DropDown dropDownTitle="Site" dropDownStyle="dropdown--destructive">
          <a id={1} href="https://www.google.com/">
            Google
          </a>
          <a id={2} href="https://www.facebook.com/">
            Facebook
          </a>
        </DropDown>
        <pre className="component-code">{destructiveDropDown}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Neutral</p>
        <DropDown dropDownTitle="Site" dropDownStyle="dropdown--neutral">
          <a id={1} href="https://www.google.com/">
            Google
          </a>
          <a id={2} href="https://www.facebook.com/">
            Facebook
          </a>
        </DropDown>
        <pre className="component-code">{neutralDropDown}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Search DropDown</p>
        <DropDown dropDownTitle="Site" search>
          <a id={1} href="https://www.google.com/">
            Google
          </a>
          <a id={2} href="https://www.facebook.com/">
            Facebook
          </a>
        </DropDown>
        <pre className="component-code">{searchDropDown}</pre>
      </div>
    </>
  );
};

export default DropDownStory;
