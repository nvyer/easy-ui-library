import React from 'react';
import PropTypes from 'prop-types';

import { useStepStyles } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CurrentStep } from "./stepper";
import { getActiveIcon, getCheckedIcon, getErrorIcon } from "./stepperIcons";

const colors = {
    isDisabled: "#1b191975",
    error: "#ba1d1d"
};

const getColor = ({ isDisabled, error }) => {
    if (isDisabled) {
        return colors[isDisabled]
    } else if (error) {
        return colors[error]
    }
};

const Step = ({ error, checked, disabled, id, children }) => {
    const [isDisabled, setIsDisabled] = useState(disabled);
    const [isChecked, setIsChecked] = useState(checked);
    const [isActive, seiIsActive] = useState();
    const activeStep = useContext(CurrentStep);

    useEffect(() => {
        if (!activeStep && !error && !isChecked) {
            seiIsActive(true);
        }
    }, [activeStep, error, isChecked]);


    useEffect(() => {
        if (id < activeStep) {
            setIsChecked(true);
            setIsActive(false);
            setIsDisabled(true);
        } else if (id === activeStep) {
            setIsActive(true);
            setIsChecked(false);
            setIsDisabled(false);
        } else if (id > activeStep) {
            setIsActive(true);
            setIsDisabled(true);
        }
    }, [id, activeStep])

    const classes = useStepStyles();

    return (
        <span
            disabled={isDisabled}
            error={error}
            checked={isChecked}
            className={classes.step}
            style={{ color: getColor({ isDisabled, error }) }}
        >
            <span className={classes.stepWrapper}>
                <span>
                    {isActive && GetActiveIcon({ id, classes, isDisabled })}
                    {error && GetErrorIcon({ isDisabled })}
                    {isChecked && !error && GetCheckedIcon({ isDisabled, classes })}
                </span>
                {children}
            </span>
        </span>
    )
};

Step.propTypes = {
    id: PropTypes.number.isRequired,
}

export default Step;

