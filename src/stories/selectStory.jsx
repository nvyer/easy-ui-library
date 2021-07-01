import React from "react";
import Select from "../components/Select/select";
import { Option, GroupOptions } from "../components/Select/select";

const SelectStory = () => {
  const selectOneOption = `<Select placeholder="Select">
    <Option>Google</Option>
    <Option>Facebook</Option>
  </Select>`;

  const selectMultypleOptionList = `<Select placeholder="Select" multypleType="list">
  <Option id={1}>Google</Option>
  <Option id={2}>Facebook</Option>
</Select>`;

  const selectMultypleOptionBlock = `<Select placeholder="Select" multypleType="block">
<Option id={1}>Google</Option>
<Option id={2}>Facebook</Option>
</Select>`;

  const groupOptions = `<Select placeholder="Select">
<GroupOptions title="Select">
  <Option>Google</Option>
  <Option>Facebook</Option>
</GroupOptions>
<GroupOptions title="Select-2">
  <Option>Google</Option>
  <Option>Facebook</Option>
</GroupOptions>
</Select>`;

  return (
    <>
      <p style={{ fontWeight: 700 }}>
        Props: placeholder, value, onChange, id, multypleType = list,block{" "}
      </p>
      <div className="component-container">
        <p className="component-title">Select one Option</p>
        <Select placeholder="Select">
          <Option id={1}>Google</Option>
          <Option id={2}>Facebook</Option>
        </Select>
        <h3 className="component-code">{selectOneOption}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Select multyple Options(List)</p>
        <Select placeholder="Select" multypleType="list">
          <Option id={1}>Google</Option>
          <Option id={2}>Facebook</Option>
        </Select>
        <h3 className="component-code">{selectMultypleOptionList}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Select multyple Options(block)</p>
        <Select placeholder="Select" multypleType="block">
          <Option id={1}>Google</Option>
          <Option id={2}>Facebook</Option>
        </Select>
        <h3 className="component-code">{selectMultypleOptionBlock}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Group Options</p>
        <Select placeholder="Select">
          <GroupOptions title="Select">
            <Option>Google</Option>
            <Option>Facebook</Option>
          </GroupOptions>
          <GroupOptions title="Select-2">
            <Option>Google</Option>
            <Option>Facebook</Option>
          </GroupOptions>
        </Select>
        <h3 className="component-code">{groupOptions}</h3>
      </div>
    </>
  );
};

export default SelectStory;
