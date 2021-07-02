import { storiesOf } from "@storybook/react";
import ButtonStory from "./buttonStory";
import DropDownStory from "./dropdownStory";
import NativeSelectStory from "./nativeSelectStory";
import SelectStory from "./selectStory";
import BreadCrumbsStory from "./breadcrumbsStory";
import TooltipStory from "./tooltipStory";
import SliderStory from "./sliderStory";
import LoaderStory from "./loaderStory";
import TextFieldInputStory from "./inputStory";
import CheckBoxStory from "./checkBoxStory";
import LinkStory from "./linkStory";
import TableStory from "./tableStory";
import BadgeStory from "./badgeStory";
import TimepickerStory from "./timepickerStory";
import TagStory from "./tagStory";
import StepperStory from "./stepperStory";

import "./styles.css";

const stories = storiesOf("Components", module);

stories.add("Button", ButtonStory);

stories.add("DropDown", DropDownStory);

stories.add("NativeSelect", NativeSelectStory);

stories.add("Select", SelectStory);

stories.add("BreadCrumbs", BreadCrumbsStory);

stories.add("Tooltip", TooltipStory);

stories.add("CheckBox", CheckBoxStory);

stories.add("Link", LinkStory);

stories.add("Table", TableStory);

stories.add("Badge", BadgeStory);

stories.add("Timepicker", TimepickerStory);

stories.add("Tag", TagStory);

stories.add("Stepper", StepperStory);

stories.add("Slider", SliderStory);

stories.add("Loader", LoaderStory);

stories.add("Input", TextFieldInputStory);
