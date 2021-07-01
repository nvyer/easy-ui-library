import { storiesOf } from "@storybook/react";
import "./styles.css";
import CheckBoxStory from "./checkBoxStory";
import LinkStory from "./linkStory";
import TableStory from "./tableStory";
import BadgeStory from "./badgeStory";
import TimepickerStory from "./timepickerStory";
import TagStory from "./tagStory";
import StepperStory from "./stepperStory";

const stories = storiesOf("Components", module);

stories.add("CheckBox", CheckBoxStory);

stories.add("Link", LinkStory);

stories.add("Table", TableStory);

stories.add("Badge", BadgeStory);

stories.add("Timepicker", TimepickerStory);

stories.add("Tag", TagStory);

stories.add("Stepper", StepperStory);
