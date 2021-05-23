import React, { useContext } from "react";
import { Size } from "./Table";
import useStyles from "./Styles";

const TableHead = ({ children,onClick,...props }) => {
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