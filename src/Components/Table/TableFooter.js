import React from "react";
import useStyles from "./Styles";

const TableFooter = ({ children, ...props }) => {
    const classes = useStyles(props);
    return (
        <div className={classes.tableFooter}>
            {children}
        </div>
    )
};

export default TableFooter;