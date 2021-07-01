import { useCheckBoxStyles, getStyle, getClassName, getPath } from "./styles";
import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

const colorOptions = {
    primary: "#1dd4ce",
    secondary: "#2C3E50"
};

const CheckBox = ({ className, color, value, checked, indeterminate, onChange, disabled }) => {
    const [clicked, setClicked] = useState(indeterminate ? true : checked);
    const [currentColor] = useState(colorOptions[color]);

    const handleClick = useCallback((event) => {
        setClicked(prevState => !prevState);
        event.target.value = value || "on";
        onChange(event);
    }, [value, setClicked, onChange]);


    const classes = useCheckBoxStyles({ disabled, clicked, indeterminate, currentColor });

    return (
        <div className={classes.checkBoxContainer}>
            <div
                onClick={handleClick}
                className={className ? className : classes.checkBox}
            >
                <svg
                    style={getStyle(indeterminate, clicked, disabled, currentColor)}
                    className={classes[`${getClassName(indeterminate, clicked)}`]}
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="-2.5 -1.7 27 27">
                    <path d={getPath(indeterminate, clicked)} />
                </svg>
            </div>
        </div >
    )
};

CheckBox.defaultProps = {
    color: "primary",
    onChange: () => { },
};

CheckBox.propTypes = {
    indeterminate: PropTypes.bool,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    className: PropTypes.string,
    value: PropTypes.any
};

export default CheckBox;

