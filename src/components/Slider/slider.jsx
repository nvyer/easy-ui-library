import { useState } from "react";
import "./slider.css";

export const Slider = ({
  marks,
  disabled,
  max,
  min,
  step,
  labelText,
  onChange,
  defaultValue,
}) => {
  const [value, setValue] = useState(defaultValue);

  const onUpdate = (e) => {
    setValue(e.target.value);
   onChange !== undefined &&  onChange(e.target.value)
  };
  return (
    <div>
        <input
          className="input-range-slider"
          max={max}
          min={min}
          onChange={(e) => onUpdate(e)}
          step={step}
          type="range"
          defaultValue={defaultValue}
          disabled={disabled}
        />
    </div>
  );
};