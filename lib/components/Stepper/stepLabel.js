import React from "react";
import { useStepLabelStyles } from "./styles";
export const StepLabel = ({
  error,
  children
}) => {
  const classes = useStepLabelStyles();
  return /*#__PURE__*/React.createElement("span", {
    classes: classes.labelContainer
  }, /*#__PURE__*/React.createElement("span", {
    className: classes.label
  }, children));
};