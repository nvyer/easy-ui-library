import React from "react";
import { useStepperStyles } from "./styles";
export const Stepper = ({
  activeStep,
  children
}) => {
  const classes = useStepperStyles();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.stepperContainer
  }, /*#__PURE__*/React.createElement(CurrentStep.Provider, {
    value: activeStep + 1
  }, children)));
};
export const CurrentStep = /*#__PURE__*/React.createContext(Stepper);