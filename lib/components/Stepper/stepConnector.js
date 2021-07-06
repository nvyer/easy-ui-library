import React from "react";
import { useStepConectorStyles } from "./styles";
export const StepConnector = () => {
  const classes = useStepConectorStyles();
  return /*#__PURE__*/React.createElement("span", {
    className: classes.connectorContainer
  });
};