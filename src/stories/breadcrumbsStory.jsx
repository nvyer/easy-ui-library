import React from "react";
import { BreadCrumbs } from "../components/BreadCrumbs/breadcrumbs";

const BreadCrumbsStory = () => {
  const primaryBreadCrumbs = `
    <BreadCrumbs separator=" >" breadcrumbsStyle="crumbs--primary">
      <a>Google</a>
      <a>FaceBook</a>
      <a>Instagram</a>
    </BreadCrumbs>
  `;

  const destructiveBreadCrumbs = `
  <BreadCrumbs separator="|" breadcrumbsStyle="crumbs--destructive">
    <a>Google</a>
    <a>FaceBook</a>
    <a>Instagram</a>
  </BreadCrumbs>
  `;

  const tagBreadCrumbs = `
  <BreadCrumbs separator="|" tag>
    <a>Google</a>
    <a>FaceBook</a>
    <a>Instagram</a>
  </BreadCrumbs>
  `;

  return (
    <>
      <p style={{ fontWeight: 700 }}>Props: breadcrumbsStyle, separator, tag</p>
      <div className="component-container">
        <p className="component-title">Primary</p>
        <BreadCrumbs separator=">" breadcrumbsStyle="crumbs--primary">
          <a>Google</a>
          <a>FaceBook</a>
          <a>Instagram</a>
        </BreadCrumbs>
        <pre className="component-code long">{primaryBreadCrumbs}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Destructive</p>
        <BreadCrumbs separator="|" breadcrumbsStyle="crumbs--destructive">
          <a>Google</a>
          <a>FaceBook</a>
          <a>Instagram</a>
        </BreadCrumbs>
        <pre className="component-code long">{destructiveBreadCrumbs}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Tag Crumbs</p>
        <BreadCrumbs separator="|" tag>
          <a>Google</a>
          <a>FaceBook</a>
          <a>Instagram</a>
        </BreadCrumbs>
        <pre className="component-code long">{tagBreadCrumbs}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">If the path is longer than 5</p>
        <BreadCrumbs separator="|" tag>
          <a>Google</a>
          <a>FaceBook</a>
          <a>Instagram</a>
          <a>Twitter</a>
          <a>Linkdin</a>
          <a>VK</a>
        </BreadCrumbs>
        <pre className="component-code long">{tagBreadCrumbs}</pre>
      </div>
    </>
  );
};

export default BreadCrumbsStory;
