import React from "react";
import { storiesOf } from "@storybook/react";
import CheckBox from "../components/CheckBox/checkBox";
import './styles.css';
import Link from "../components/Link/link";

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
        <div className='wrapper'>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Default</p>
                <CheckBox />
                <span className='code'>{basicCheckBox}</span>
            </div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Secodary</p>
                <CheckBox color='secondary' />
                <span className='code'>{secondaryCheckBox}</span>
            </div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Checked</p>
                <CheckBox checked />
                <span className='code'>{checked}</span>
            </div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Disabled and Checked</p>
                <CheckBox disabled checked />
                <span className='code'>{disabled}</span>
            </div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Indeterminate</p>
                <CheckBox indeterminate />
                <span className='code'>{indeterminate}</span>
            </div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Accessibility</p>
                <CheckBox onChange={(e) => console.log(e.target.value)} value='checkedA' />
                <pre className='code long'>{accessibility}</pre>
            </div>
        </div >
    )
});

stories.add('Link', () => {
    const defaultLink = `<Link to={"https://github.com/aca-dec-2020/ui-lib"}>Easy-UI</Link>`;
    const secondaryLink = `<Link color="secondary" to={"https://github.com/aca-dec-2020/ui-lib"}>Easy-UI</Link>`;
    let accesibility = `  <Link
    onClick={() => console.log("clicked")}
    color="secondary"
    to={"https://github.com/aca-dec-2020/ui-lib"}>
    Easy-UI
  </Link>`
    return (
        <div>
            <div className='container'>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Default</p>
                <Link to={"https://github.com/aca-dec-2020/ui-lib"}>Easy-UI</Link>
                <pre className='code'>{defaultLink}</pre>
            </div>
            <div className='container'>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Secondary</p>
                <Link color="secondary" to={"https://github.com/aca-dec-2020/ui-lib"}>Easy-UI</Link>
                <pre className='code'>{secondaryLink}</pre>
            </div>
            <div className='container'>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Accessibility</p>
                <Link onClick={() => console.log("clicked")} color="secondary" to={"https://github.com/aca-dec-2020/ui-lib"}>Easy-UI</Link>
                <pre className='code long'>{accesibility}</pre>
            </div>
        </div>
    )
});