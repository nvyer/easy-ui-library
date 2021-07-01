import React from "react";
import TimePicker from "../components/TimePicker/timePicker";

const TimepickerStory = () => {
  const timePicker = `<TimePicker />`;
  return (
    <>
      <p>Props: className</p>
      <div style={{ alignItems: "center" }} className="component-container">
        <p className="component-title">Time Picker</p>
        <TimePicker />
        <pre style={{ marginTop: "20px" }} className="component-code">
          {timePicker}
        </pre>
      </div>
    </>
  );
};

export default TimepickerStory;
