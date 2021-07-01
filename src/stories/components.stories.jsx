import { storiesOf } from "@storybook/react";
import buttonStory from "./button";
import dropDownStory from "./dropdown";
import nativeSelectStory from "./nativeselect";
import selectStory from "./select";
import breadCrumbsStory from "./breadcrumbs";
import tooltipStory from "./tooltip";
import sliderStory from "./slider";
import loaderStory from "./loader";
import textFieldInputStory from "./input";
import CheckBoxStory from "./checkBoxStory";
import LinkStory from "./linkStory";
import TableStory from "./tableStory";
import BadgeStory from "./badgeStory";
import TimepickerStory from "./timepickerStory";
import TagStory from "./tagStory";
import StepperStory from "./stepperStory";

import "./styles.css";

const stories = storiesOf("Components", module);

stories.add("Button", buttonStory);

stories.add("DropDown", dropDownStory);

stories.add("NativeSelect", nativeSelectStory);

stories.add("Select", selectStory);

stories.add("BreadCrumbs", breadCrumbsStory);

stories.add("Tooltip", tooltipStory);

stories.add("CheckBox", CheckBoxStory);

stories.add("Link", LinkStory);

stories.add("Table", TableStory);

stories.add("Badge", BadgeStory);

stories.add("Timepicker", TimepickerStory);

stories.add("Tag", TagStory);

stories.add("Stepper", StepperStory);

stories.add("Slider", sliderStory);

stories.add("Loader", loaderStory);

stories.add("Input", textFieldInputStory);

