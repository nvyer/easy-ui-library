import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import CheckBox from "../components/CheckBox/checkBox";
import "./styles.css";
import Button from "../components/Button/Button";
import Link from "../components/Link/link";
import TableContainer from "../components/Table/tableContainer";
import Table from "../components/Table/table";
import TableHead from "../components/Table/tableHead";
import TableBody from "../components/Table/tableBody";
import TableRow from "../components/Table/tableRow";
import TableCell from "../components/Table/tableCell";
import TableFooter from "../components/Table/tableFooter";
import TablePagination from "../components/Table/tablePagination";
import Badge from "../components/badge/Badge";
import TimePicker from "../components/TimePicker/timePicker";
import Tag from "../components/Tag/tag";

import Stepper from "../components/Stepper/stepper";
import Step from "../components/Stepper/step";
import StepLabel from "../components/Stepper/stepLabel";
import StepperConnector from "../components/Stepper/stepConnector";

const stories = storiesOf("Components", module);

stories.add("CheckBox", () => {
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
        <div className="wrapper">
            <p>Props: className, color, value, checked, indeterminate, onChange, disabled</p>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Default</p>
                <CheckBox />
                <span className="code">{basicCheckBox}</span>
            </div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Secodary</p>
                <CheckBox color="secondary" />
                <span className="code">{secondaryCheckBox}</span>
            </div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Checked</p>
                <CheckBox checked />
                <span className="code">{checked}</span>
            </div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Disabled and Checked</p>
                <CheckBox disabled checked />
                <span className="code">{disabled}</span>
            </div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Indeterminate</p>
                <CheckBox indeterminate />
                <span className="code">{indeterminate}</span>
            </div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Accessibility</p>
                <CheckBox onChange={(e) => console.log(e.target.value)} value="checkedA" />
                <pre className="code long">{accessibility}</pre>
            </div>
        </div >
    )
});

stories.add("Link", () => {
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
            <p>Props: color, onClick, to</p>
            <div className="container">
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Default</p>
                <Link to={"https://github.com/aca-dec-2020/ui-lib"}>Easy-UI</Link>
                <pre className="code">{defaultLink}</pre>
            </div>
            <div className="container">
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Secondary</p>
                <Link color="secondary" to={"https://github.com/aca-dec-2020/ui-lib"}>Easy-UI</Link>
                <pre className="code">{secondaryLink}</pre>
            </div>
            <div className="container">
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Accessibility</p>
                <Link onClick={() => console.log("clicked")} color="secondary" to={"https://github.com/aca-dec-2020/ui-lib"}>Easy-UI</Link>
                <pre className="code long">{accesibility}</pre>
            </div>
        </div>
    )
});

stories.add("Table", () => {
    const table = `function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
        createData("Ice cream", 237, 9.0, 37, 4.3),
        createData("Eclair", 262, 16.0, 24, 6.0),
        createData("Cupcake", 305, 3.7, 67, 4.3),
        createData("Gingerbread", 356, 16.0, 49, 3.9),
    ];

    return (<TableContainer >
        <Table size="medium" >
            <TableHead >
                <TableRow selected>
                    <TableCell>Dessert(100g)</TableCell>
                    <TableCell >Calories</TableCell>
                    <TableCell>Fat&nbsp;(g)</TableCell>
                    <TableCell >Carbs&nbsp;(g)</TableCell>
                    <TableCell>Protein&nbsp;(g)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow hover key={row.name}>
                        <TableCell>
                            {row.name}
                        </TableCell>
                        <TableCell>{row.calories}</TableCell>
                        <TableCell>{row.fat}</TableCell>
                        <TableCell>{row.carbs}</TableCell>
                        <TableCell>{row.protein}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TablePagination
                onPrevPageonClick={() => console.log("prev")}
                nextPageIconClick={() => console.log("next")}
                rowsPerPageOptions={[5, 2]} />
            </TableFooter>
        </Table>
    </TableContainer>)`

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
        createData("Ice cream", 237, 9.0, 37, 4.3),
        createData("Eclair", 262, 16.0, 24, 6.0),
        createData("Cupcake", 305, 3.7, 67, 4.3),
        createData("Gingerbread", 356, 16.0, 49, 3.9),
    ];

    return (
        <div className="container">
            <p>Props: size, onClick, selected,hover
                <br />
                <br />
                Table pagination: className, rowsPerPageOptions, nextPageIconClick, onPrevPageonClick
            </p>
            <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Basic Table</p>
            <TableContainer >
                <Table size="medium" >
                    <TableHead >
                        <TableRow selected>
                            <TableCell>Dessert(100g)</TableCell>
                            <TableCell >Calories</TableCell>
                            <TableCell>Fat&nbsp;(g)</TableCell>
                            <TableCell >Carbs&nbsp;(g)</TableCell>
                            <TableCell>Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow hover key={row.name}>
                                <TableCell>
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.calories}</TableCell>
                                <TableCell>{row.fat}</TableCell>
                                <TableCell>{row.carbs}</TableCell>
                                <TableCell>{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TablePagination onPrevPageonClick={() => console.log("prev")} nextPageIconClick={() => console.log("next")} rowsPerPageOptions={[5, 2]}></TablePagination>
                    </TableFooter>
                </Table>
            </TableContainer>
            <pre style={{ marginTop: "60px" }} className="code long">{table}</pre>
        </div>
    )
});


stories.add("Badge", () => {
    const defaultBadge = `<Badge color="#bf73ff" />`;
    const notificationBadge = ` <Badge color="#36badf" icon="notification" rotate={150} badgeContent={1000} />`;
    const chatBadge = `<Badge color="#58e1ab" icon="chat" badgeContent={3} />`;
    const wirelessBadge = `<Badge color="#ffa500" icon="wireless" badgeContent={1} rotate={20} />`;
    const accountBadge = ` <Badge color="#a9a2fa" icon="account" />`
    const alerBadge = ` <Badge color="#FF0000" icon="alert" />`;
    const errorBadge = `<Badge onClick={() => console.log("error")} color="#FF7F7F" icon="error" />`;

    return (
        <div>
            <p>Props:size, rotate, color, icon, badgeContent, onClick</p>
            <div className="container">
                <p className="component-title">Default</p>
                <Badge color="#bf73ff" />
                <pre className="code">{defaultBadge}</pre>
            </div>
            <div className="container">
                <p className="component-title">Notification Icon</p>
                <Badge color="#36badf" icon="notification" rotate={150} badgeContent={1000} />
                <pre className="code">{notificationBadge}</pre>
            </div>
            <div className="container">
                <p className="component-title">Chat Icon</p>
                <Badge color="#58e1ab" icon="chat" badgeContent={3} />
                <pre className="code">{chatBadge}</pre>
            </div>
            <div className="container">
                <p className="component-title">Wireless Icon</p>
                <Badge color="#ffa500" icon="wireless" badgeContent={1} rotate={20} />
                <pre className="code">{wirelessBadge}</pre>
            </div>
            <div className="container">
                <p className="component-title">Account Icon</p>
                <Badge color="#a9a2fa" icon="account" />
                <pre className="code">{accountBadge}</pre>
            </div>
            <div className="container">
                <p className="component-title">Alert Icon</p>
                <Badge color="#FF0000" icon="alert" />
                <pre className="code">{alerBadge}</pre>
            </div>
            <div className="container">
                <p className="component-title">Error Icon</p>
                <Badge onClick={() => console.log("error")} color="#FF7F7F" icon="error" />
                <pre className="code">{errorBadge}</pre>
            </div>
        </div>
    )
});

stories.add("Timepicker", () => {
    const timePicker = `<TimePicker />`
    return (
        <div className="timepicker-container">
            <p>Props: className</p>
            <TimePicker />
            <pre style={{ marginTop: "20px" }} className="code">{timePicker}</pre>
        </div>
    )
});

stories.add("Tag", () => {
    const basicTag = `<Tag />`;
    const secondaryTag = `<Tag type="secondary" placeholder="Press Enter to submit" />`;

    return (
        <div>
            <p>Props: className, placeholder, type</p>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Default</p>
                <Tag />
                <span className="code">{basicTag}</span>
            </div>
            <div style={{ borderBottom: "1px solid grey" }}>
                <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Secondary</p>
                <Tag type="secondary" placeholder="Press Enter to submit" />
                <span className="code">{secondaryTag}</span>
            </div>
        </div>
    )
});

stories.add("Stepper", () => {
    const [activeStep, setActiveStep] = useState(0);
    const basicStepper = `<Stepper activeStep={1}>
        <Step id={1}>
            <StepLabel>Step 1</StepLabel>
        </Step>
            <StepperConnector />
        <Step id={2}>
            <StepLabel>Step 2</StepLabel>
        </Step>
            <StepperConnector />
        <Step id={3}>
            <StepLabel>Step 3</StepLabel>
        </Step>
</Stepper>`;

    return (
        <div className="container">
            <p>Props: activeStep, error, checked, disabled, id</p>
            <Stepper activeStep={activeStep}>
                <Step id={1}>
                    <StepLabel>Step 1</StepLabel>
                </Step>
                <StepperConnector />
                <Step id={2}>
                    <StepLabel>Step 2</StepLabel>
                </Step>
                <StepperConnector />
                <Step id={3}>
                    <StepLabel>Step 3</StepLabel>
                </Step>
            </Stepper>
            {activeStep !== 3 ?
                <Button onClick={() => setActiveStep(activeStep + 1)}>
                    {activeStep === 2 ? "Finish" : "Next"}
                </Button> :
                <Button onClick={() => setActiveStep(0)}>Back</Button>}
            <pre className="code long">{basicStepper}</pre>
        </div >
    )
})

