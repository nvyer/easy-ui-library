import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../components/Button/Button";
import BreadCrumbs from "../components/BreadCrumbs/breadcrumbs";
import DropDown from "../components/DropDown/dropdown";
import NativeSelect from "../components/Select/native-select";
import Select from "../components/Select/select";
import { Option, GroupOptions } from "../components/Select/select";
import Slider from "../components/Slider/slider";
import Tooltip from "../components/Tooltip/tooltip";

import "./stories.css";

const stories = storiesOf("Components", module);
stories.add("Button", () => {
  const primaryButton = `<Button onClick={(e) => console.log(e)} buttonStyle="btn--primary--normal">Easy-UI</Button>`;
  const destructiveButton = `<Button onClick={(e) => console.log(e)} buttonStyle="btn--primary--destructive">Easy-UI</Button>`;
  const secondaryNormalButton = `<Button onClick={(e) => console.log(e)} buttonStyle="secondary--normal">Easy-UI</Button>`;
  const secondaryDestructiveButton = `<Button onClick={(e) => console.log(e)} buttonStyle="secondary--destructive">Easy-UI</Button>`;
  const subtleNormalButton = `<Button onClick={(e) => console.log(e)} buttonStyle="subtle--normal">Easy-UI</Button>`;
  const subtleDestructiveButton = `<Button onClick={(e) => console.log(e)} buttonStyle="subtle--destructive">Easy-UI</Button>`;
  const isLoadingButton = `<Button onClick={(e) => console.log(e)} isLoading>Easy-UI</Button>`;
  const disabledButton = `<Button onClick={(e) => console.log(e)} disabled>Easy-UI</Button>`;

  return (
    <>
      <h4>Props: onClick, buttonStyle, disabled, isLoading</h4>
      <div className="component-container">
        <p className="component-title">Primary Normal</p>
        <Button buttonStyle="btn--primary--normal">Easy-UI</Button>
        <h3 className="component-code">{primaryButton}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Primary Destructive</p>
        <Button buttonStyle="btn--primary--destructive">Easy-UI</Button>
        <h3 className="component-code">{destructiveButton}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Secondary Normal</p>
        <Button buttonStyle="btn--secondary--normal">Easy-UI</Button>
        <h3 className="component-code">{secondaryNormalButton}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Secondary Destructive</p>
        <Button buttonStyle="btn--secondary--destructive">Easy-UI</Button>
        <h3 className="component-code">{secondaryDestructiveButton}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Subtle Normal</p>
        <Button buttonStyle="btn--subtle--normal">Easy-UI</Button>
        <h3 className="component-code">{subtleNormalButton}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Subtle Destructive</p>
        <Button buttonStyle="btn--subtle--destructive">Easy-UI</Button>
        <h3 className="component-code">{subtleDestructiveButton}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Loading</p>
        <Button isLoading>Easy-UI</Button>
        <h3 className="component-code">{isLoadingButton}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Disabled</p>
        <Button disabled>Easy-UI</Button>
        <h3 className="component-code">{disabledButton}</h3>
      </div>
    </>
  );
});

stories.add("DropDown", () => {
  const primaryDropDown = `<DropDown dropDownTitle="Site">
    <a id={1} href="https://www.google.com/">Google</a>
    <a id={2} href="https://www.facebook.com/">Facebook</a>
  </DropDown>`;

  const destructiveDropDown = `<DropDown dropDownTitle="Site" dropDownStyle="dropdown--destructive">
  <a id={1} href="https://www.google.com/">Google</a>
  <a id={2} href="https://www.facebook.com/">Facebook</a>
</DropDown>`;

  const neutralDropDown = `<DropDown dropDownTitle="Site" dropDownStyle="dropdown--neutral">
<a id={1} href="https://www.google.com/">Google</a>
<a id={2} href="https://www.facebook.com/">Facebook</a>
</DropDown>`;

  const searchDropDown = `<DropDown dropDownTitle="Site" search>
<a id={1} href="https://www.google.com/">Google</a>
<a id={2} href="https://www.facebook.com/">Facebook</a>
</DropDown>`;
  return (
    <>
      <h4>Props: dropDownTitle, dropDownStyle, search</h4>
      <div className="component-container">
        <p className="component-title">Primary</p>
        <DropDown dropDownTitle="Site">
          <a id={1} href="https://www.google.com/">
            Google
          </a>
          <a id={2} href="https://www.facebook.com/">
            Facebook
          </a>
        </DropDown>
        <h3 className="component-code">{primaryDropDown}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Destructive</p>
        <DropDown dropDownTitle="Site" dropDownStyle="dropdown--destructive">
          <a id={1} href="https://www.google.com/">
            Google
          </a>
          <a id={2} href="https://www.facebook.com/">
            Facebook
          </a>
        </DropDown>
        <h3 className="component-code">{destructiveDropDown}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Neutral</p>
        <DropDown dropDownTitle="Site" dropDownStyle="dropdown--neutral">
          <a id={1} href="https://www.google.com/">
            Google
          </a>
          <a id={2} href="https://www.facebook.com/">
            Facebook
          </a>
        </DropDown>
        <h3 className="component-code">{neutralDropDown}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Search DropDown</p>
        <DropDown dropDownTitle="Site" search>
          <a id={1} href="https://www.google.com/">
            Google
          </a>
          <a id={2} href="https://www.facebook.com/">
            Facebook
          </a>
        </DropDown>
        <h3 className="component-code">{searchDropDown}</h3>
      </div>
    </>
  );
});

stories.add("NativeSelect", () => {
  const primaryNativeSelect = `<NativeSelect>
    <option>Google</option>
    <option>FaceBook</option>
  </NativeSelect>`;

  const neutralNativeSelect = `<NativeSelect selectStyle="native--select--neutral">
  <option>Google</option>
  <option>FaceBook</option>
</NativeSelect>`;

  const darkNativeSelect = `<NativeSelect selectStyle="native--select--dark">
  <option>Google</option>
  <option>FaceBook</option>
</NativeSelect>`;

  const normalNativeSelect = `<NativeSelect selectStyle="native--select--normal">
  <option>Google</option>
  <option>FaceBook</option>
</NativeSelect>`;

  return (
    <>
      <h4>
        Props: onChange, disabled, selectStyle, placeholder, form, multiple,
        name
      </h4>
      <div className="component-container">
        <p className="component-title">Primary</p>
        <NativeSelect selectStyle="native--select--primary">
          <option>Google</option>
          <option>FaceBook</option>
        </NativeSelect>
        <h3 className="component-code">{primaryNativeSelect}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Neutral</p>
        <NativeSelect selectStyle="native--select--neutral">
          <option>Google</option>
          <option>FaceBook</option>
        </NativeSelect>
        <h3 className="component-code">{neutralNativeSelect}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Dark</p>
        <NativeSelect selectStyle="native--select--dark">
          <option>Google</option>
          <option>FaceBook</option>
        </NativeSelect>
        <h3 className="component-code">{darkNativeSelect}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Normal</p>
        <NativeSelect selectStyle="native--select--normal">
          <option>Google</option>
          <option>FaceBook</option>
        </NativeSelect>
        <h3 className="component-code">{normalNativeSelect}</h3>
      </div>
    </>
  );
});

stories.add("Select", () => {
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
      <h4>
        Props: placeholder, value, onChange, id, multypleType = list,block{" "}
      </h4>
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
});

stories.add("BreadCrumbs", () => {
  const primaryBreadCrumbs = `<BreadCrumbs separator=" >" breadcrumbsStyle="crumbs--primary">
    <a>Google</a>
    <a>FaceBook</a>
    <a>Instagram</a>
    </BreadCrumbs>`;

  const destructiveBreadCrumbs = `<BreadCrumbs separator="|" breadcrumbsStyle="crumbs--destructive">
    <a>Google</a>
    <a>FaceBook</a>
    <a>Instagram</a>
  </BreadCrumbs>`;

  const tagBreadCrumbs = `<BreadCrumbs separator="|" tag>
  <a>Google</a>
  <a>FaceBook</a>
  <a>Instagram</a>
</BreadCrumbs>`;
  return (
    <>
      <h4>Props: breadcrumbsStyle, separator, tag</h4>
      <div className="component-container">
        <p className="component-title">Primary</p>
        <BreadCrumbs separator=" >" breadcrumbsStyle="crumbs--primary">
          <a>Google</a>
          <a>FaceBook</a>
          <a>Instagram</a>
        </BreadCrumbs>
        <h3 className="component-code">{primaryBreadCrumbs}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Destructive</p>
        <BreadCrumbs separator="|" breadcrumbsStyle="crumbs--destructive">
          <a>Google</a>
          <a>FaceBook</a>
          <a>Instagram</a>
        </BreadCrumbs>
        <h3 className="component-code">{destructiveBreadCrumbs}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Tag Crumbs</p>
        <BreadCrumbs separator="|" tag>
          <a>Google</a>
          <a>FaceBook</a>
          <a>Instagram</a>
        </BreadCrumbs>
        <h3 className="component-code">{tagBreadCrumbs}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">If the path is longer than 5</p>
        <BreadCrumbs separator="|" tag>
          <a>Google</a>
          <a>FaceBook</a>
          <a>Instagram</a>
          <a>Twitter</a>
          <a>Linkdin</a>
          <a>VK</a>
        </BreadCrumbs>
        <h3 className="component-code">{tagBreadCrumbs}</h3>
      </div>
    </>
  );
});

stories.add("Tooltip", () => {
  const primaryTooltip = `<Tooltip tooltipStyle="tooltip--primary" content="Hello" position="top">
   <Button>Easy-UI</Button>
   </Tooltip>`;

  const destructiveTooltip = `<Tooltip tooltipStyle="tooltip--destructive" content="Hello" position="bottom">
   <Button>Easy-UI</Button>
   </Tooltip>`;

  const neutralTooltip = `<Tooltip tooltipStyle="tooltip--neutral" content="Hello" position="top--right">
   <Button>Easy-UI</Button>
   </Tooltip>`;
  return (
    <>
      <h4>
        Props: tooltipStyle, position(top, bottom, right, left, top--right,
        top--left, bottom--left, bottom--right), content
      </h4>
      <div className="component-container">
        <p className="component-title">Primary</p>
        <Tooltip tooltipStyle="tooltip--primary" content="Hello" position="top">
          <Button>Easy-UI</Button>
        </Tooltip>
        <h3 className="component-code">{primaryTooltip}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Destructive</p>
        <Tooltip
          tooltipStyle="tooltip--destructive"
          content="Hello"
          position="bottom"
        >
          <Button>Easy-UI</Button>
        </Tooltip>
        <h3 className="component-code">{destructiveTooltip}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Neutral</p>
        <Tooltip
          tooltipStyle="tooltip--neutral"
          content="Hello"
          position="top--right"
        >
          <Button>Easy-UI</Button>
        </Tooltip>
        <h3 className="component-code">{neutralTooltip}</h3>
      </div>
    </>
  );
});

stories.add("Slider", () => {
    const primarySlider = `<Slider sliderColor="primary"/>`
    const destructiveSlider = `<Slider sliderColor="destructive"/>`
    const stepSlider = `<Slider step={10} min={0} max={100} sliderColor="destructive" marks label/>`
    const disabledSlider = `<Slider disabled />`
  return (
    <>
      <h4>
        Props: step, min, max, defaultValue, onChange
        disabled, marks, label, sliderColor
      </h4>
      <div className="component-container">
        <p className="component-title">Primary</p>
        <Slider sliderColor="primary"/>
        <h3 className="component-code">{primarySlider}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Destructive</p>
        <Slider sliderColor="destructive"/>
        <h3 className="component-code">{destructiveSlider}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Step, Min, Max, Marks, Label</p>
        <Slider step={10} min={0} max={100} sliderColor="destructive" marks label/>
        <h3 className="component-code">{stepSlider}</h3>
      </div>

      <div className="component-container">
        <p className="component-title">Disabled</p>
        <Slider step={10} min={0} max={100} sliderColor="destructive" marks label disabled/>
        <h3 className="component-code">{disabledSlider}</h3>
      </div>
    </>
  );
});
