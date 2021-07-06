import React from "react";
import { useStepperStyles } from "./styles";

export const Stepper = ({ activeStep, children }) => {
    const classes = useStepperStyles();
    return (
        <div style={{ display: "inline-block" }}>
            <div className={classes.stepperContainer}>
                <CurrentStep.Provider value={activeStep + 1}>
                    {children}
                </CurrentStep.Provider>
            </div>
        </div>
    )
};
export const CurrentStep = React.createContext(Stepper);


