import React, { useContext } from "react";
import { Size } from "./table";
import useStyles from "./styles";

const TableHead = ({ children, onClick, ...props }) => {
    const Tablesize = useContext(Size);

    props = { ...props, Tablesize }

    const classes = useStyles(props);
    return (
        <div onClick={onClick} className={classes.tableHead}>
            {children}
        </div>
    )

};

export default TableHead;

