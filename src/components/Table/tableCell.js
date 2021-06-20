import React from "react";
import useStyles from "./styles";

const TableCell = ({ children, onClick, ...props }) => {

    const classes = useStyles(props);

    return (
        <div onClick={onClick} className={classes.tableCell}>
            {children}
        </div>
    )
}

export default TableCell;

