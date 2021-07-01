import React from "react";
import Tag from "../components/Tag/tag";

const TagStory = () => {
  const basicTag = `<Tag />`;
  const secondaryTag = `<Tag type="secondary" placeholder="Press Enter to submit" />`;

  return (
    <div>
      <p style={{ fontWeight: 700 }}>
        Props: className, placeholder, type(primary,secondary)
      </p>
      <div className="component-container">
        <p className="component-title">Default</p>
        <Tag />
        <span className="component-code">{basicTag}</span>
      </div>
      <div className="component-container">
        <p className="component-title">Secondary</p>
        <Tag type="secondary" placeholder="Press Enter to submit" />
        <span className="component-code">{secondaryTag}</span>
      </div>
    </div>
  );
};

export default TagStory;
