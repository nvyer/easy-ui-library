import React from "react";
import useStyles from "./styles";

export const Table = ({ children, size, onClick, ...props }) => {

    const classes = useStyles(props);

    return (
        <div onClick={onClick} className={classes.table}>
            <Size.Provider value={size}>
                {children}
            </Size.Provider>
        </div>
    )
};

export const Size = React.createContext(Table);

