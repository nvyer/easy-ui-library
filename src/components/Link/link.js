import React from "react";
import { useLinkStyles } from "./styles";

export const Link = ({ color, onClick, to, children }) => {
    const classes = useLinkStyles(color);
    return (
        <a
            onClick={onClick}
            className={classes.link}
            href={to}>
            {children}
        </a>
    )
};

Link.defaultProps = {
    color: "primary"
};


