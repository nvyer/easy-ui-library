import React, { useState } from "react";
import Stepper from "../components/Stepper/stepper";
import Step from "../components/Stepper/step";
import StepLabel from "../components/Stepper/stepLabel";
import StepperConnector from "../components/Stepper/stepConnector";
import Button from "../components/Button/Button";

const StepperStory = () => {
  const [activeStep, setActiveStep] = useState(0);
  const basicStepper = `
  <Stepper activeStep={1}>
      <Step id={1}>
        <StepLabel>Step 1</StepLabel>
      </Step>
      <StepperConnector />
      <Step id={2}>
        <StepLabel>Step 2</StepLabel>
      </Step>
      <StepperConnector />
      <Step id={3}>
         <StepLabel>Step 3</StepLabel>
      </Step>
  </Stepper>
  `;

  return (
    <div className="component-container">
      <p style={{ fontWeight: 700 }}>
        Props: activeStep(zero based index), error, checked, disabled, id
      </p>
      <p className="component-title">Stepper</p>
      <Stepper activeStep={activeStep}>
        <Step id={1}>
          <StepLabel>Step 1</StepLabel>
        </Step>
        <StepperConnector />
        <Step id={2}>
          <StepLabel>Step 2</StepLabel>
        </Step>
        <StepperConnector />
        <Step id={3}>
          <StepLabel>Step 3</StepLabel>
        </Step>
      </Stepper>
      {activeStep !== 3 ? (
        <Button onClick={() => setActiveStep(activeStep + 1)}>
          {activeStep === 2 ? "Finish" : "Next"}
        </Button>
      ) : (
        <Button onClick={() => setActiveStep(0)}>Back</Button>
      )}
      <pre className="component-code long">{basicStepper}</pre>
    </div>
  );
};

export default StepperStory;
