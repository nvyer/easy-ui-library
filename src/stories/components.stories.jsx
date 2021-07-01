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

import "./styles.css";

const stories = storiesOf("Components", module);

stories.add("Button", buttonStory);

stories.add("DropDown", dropDownStory);

stories.add("NativeSelect", nativeSelectStory);

stories.add("Select", selectStory);

stories.add("BreadCrumbs", breadCrumbsStory);

stories.add("Tooltip", tooltipStory);

stories.add("Slider", sliderStory);

stories.add("Loader", loaderStory);

stories.add("Input", textFieldInputStory);
