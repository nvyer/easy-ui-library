import React from "react";
import useStyles from "./styles";

export const TableContainer = ({ children, ...props }) => {
    const classes = useStyles(props);

    return (
        <div className={classes.tableContainer}>
            {children}
        </div>
    )
};

