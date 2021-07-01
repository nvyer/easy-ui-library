import React from "react";
import Loader from "../components/Loader/loader";

const LoaderStory = () => {
  const primaryLoader = `<Loader color="primary" size="small"/>`;
  const secondaryLoader = `<Loader color="secondary" size="medium" label/>`;
  const defaultLoader = `<Loader size="large"/>`;

  return (
    <>
      <p style={{ fontWeight: 700 }}>
        Props: size(small, medium, large), color(primary,secondary), label
      </p>
      <div className="component-container">
        <p className="component-title">Primary</p>
        <Loader color="primary" size="small" />
        <pre className="component-code">{primaryLoader}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Secondary</p>
        <Loader color="secondary" size="medium" label="loading..." />
        <pre className="component-code">{secondaryLoader}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Default & Large</p>
        <Loader size="large" />
        <pre className="component-code">{defaultLoader}</pre>
      </div>
    </>
  );
};

export default LoaderStory;
