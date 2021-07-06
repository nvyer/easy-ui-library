import React from "react";
import { useStepConectorStyles } from "./styles";

export const StepConnector = () => {
    const classes = useStepConectorStyles();
    return (
        <span className={classes.connectorContainer}></span>
    )
};

