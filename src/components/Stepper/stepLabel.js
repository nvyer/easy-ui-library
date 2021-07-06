import React from "react";
import { useStepLabelStyles } from "./styles";

export const StepLabel = ({ error, children }) => {
    const classes = useStepLabelStyles();
    return (
        <span
            classes={classes.labelContainer}>
            <span className={classes.label}>
                {children}
            </span>
        </span>
    )
};



