import React, { useContext } from "react";
import { Size } from './table';
import useStyles from "./styles";

const TableRow = ({ children, onClick, ...props }) => {
    const tablesSize = useContext(Size);
    props = { ...props, tablesSize }
    const classes = useStyles(props);

    return (
        <div onClick={onClick} className={classes.tableRow}>
            {children}
        </div>
    )
}

export default TableRow;

