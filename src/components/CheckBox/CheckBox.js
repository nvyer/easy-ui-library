import React, { useState } from "react";
import "./CheckBox.css";
import "./IndeterminateCheckbox.css";

const CheckBox = ({ indeterminate, size, onChange, disabled, checked }) => {
    const [backgroundColor, setbackgroundColor] = useState("");
    const [check, setCheck] = useState(checked);

    const handleBackgroundonHover = () => {
        if (check && !disabled) {
            return setbackgroundColor("blue");
        } else if (disabled) {
            return
        } else {
            return setbackgroundColor("grey");
        }
    };

    const resetBackgroundColoronHover = () => {
        setbackgroundColor("");
    };

    const changeChecked = () => {
        setCheck(prevState => {
            if (prevState === undefined) {
                return prevState = true;
            } else {
                return !prevState;
            }
        })
    };

    const handleMouseDown = () => {
        if (check && !disabled) {
            return setbackgroundColor("dark-blue");
        } else if (disabled) {
            return
        } else {
            return setbackgroundColor("dark-grey");
        }
    }

    return (
        <label className="checkbox-label">
            <span
                className={`checbox-container ${backgroundColor}`}
                onMouseOut={resetBackgroundColoronHover}
                onMouseOver={handleBackgroundonHover}
            >
                <input
                    type="checkbox"
                    className={`checkbox-input`}
                    onChange={onChange}
                    checked={checked}
                    disabled={disabled}
                />
                <span
                    tabIndex='-1'
                    onClick={changeChecked}
                    onMouseDown={handleMouseDown}
                    className={!indeterminate ? "check-box" : "indeterminate-checkbox"}></span>
            </span>
        </label>
    )
}

export default CheckBox;