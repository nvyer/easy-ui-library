import React from "react";
import { storiesOf } from "@storybook/react";
import CheckBox from "../components/CheckBox/checkBox";
import './styles.css';
import { mdiConsoleLine } from "@mdi/js";

const stories = storiesOf('Components', module);

stories.add('CheckBox', () => {
    const basicCheckBox = `<CheckBox />`;
    const secondaryCheckBox = `<CheckBox color="secondary"/>`;
    const checked = `<CheckBox checked />`;
    const disabled = `<CheckBox disabled checked />`;
    const indeterminate = `<CheckBox indeterminate />`;
    const accessibility = `<CheckBox
    className="customClassName"
    value="checkedA"
    onChange={(e) => console.log(e.target.value)}
    />`;

    return (
        <div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p>Default</p>
                <CheckBox />
                <span className='code'>{basicCheckBox}</span>
            </div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p>Secodary</p>
                <CheckBox color='secondary' />
                <span className='code'>{secondaryCheckBox}</span>
            </div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p>Checked</p>
                <CheckBox checked />
                <span className='code'>{checked}</span>
            </div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p>Disabled and Checked</p>
                <CheckBox disabled checked />
                <span className='code'>{disabled}</span>
            </div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p>Indeterminate</p>
                <CheckBox indeterminate />
                <span className='code'>{indeterminate}</span>
            </div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p>Accessibility</p>
                <CheckBox onChange={(e) => console.log(e.target.value)} value='checkedA' />
                <pre className='code long'>{accessibility}</pre>
            </div>
        </div >
    )
});