import React from "react";
import { storiesOf } from "@storybook/react";
import CheckBox from "../components/CheckBox/checkBox";
import './styles.css';
import Link from "../components/Link/link";
import TableContainer from "../components/Table/tableContainer";
import Table from "../components/Table/table";
import TableHead from "../components/Table/tableHead";
import TableBody from "../components/Table/tableBody";
import TableRow from "../components/Table/tableRow";
import TableCell from "../components/Table/tableCell";
import TableFooter from "../components/Table/tableFooter";
import TablePagination from "../components/Table/tablePagination";

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

stories.add('Table', () => {
    const table = `function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (<TableContainer >
        <Table size='medium' >
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
                onPrevPageonClick={() => console.log('prev')}
                nextPageIconClick={() => console.log('next')}
                rowsPerPageOptions={[5, 2]} />
            </TableFooter>
        </Table>
    </TableContainer>)`

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
        <div className='container'>
            <p style={{ fontSize: "18px", fontFamily: "system-ui" }}>Basic Table</p>
            <TableContainer >
                <Table size='medium' >
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
                        <TablePagination onPrevPageonClick={() => console.log('prev')} nextPageIconClick={() => console.log('next')} rowsPerPageOptions={[5, 2]}></TablePagination>
                    </TableFooter>
                </Table>
            </TableContainer>
            <pre style={{ marginTop: "60px" }} className='code long'>{table}</pre>
        </div>
    )
})