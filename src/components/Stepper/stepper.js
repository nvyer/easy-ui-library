import React from "react";
import { useStepperStyles } from "./styles";

const Stepper = ({ activeStep, children }) => {
    const classes = useStepperStyles();
    return (
        <div className={classes.stepperContainer}>
            <CurrentStep.Provider value={activeStep + 1}>
                {children}
            </CurrentStep.Provider>
        </div>
    )
};
export const CurrentStep = React.createContext(Stepper);

export default Stepper;

