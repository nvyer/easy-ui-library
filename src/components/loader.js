import PropTypes from 'prop-types';
import { useLoaderStyles } from "./styles";
import React, { useEffect, useState } from "react";

const colors = {
    primary: "#1DD4CE",
    secondary: "#2C3E50"
};

const Loader = ({ size, color, label }) => {
    const [sizes, setSizes] = useState({ loaderSize: size, labelSize: "15px" });

    useEffect(() => {
        switch (size) {
            case "small":
                setSizes({ loaderSize: "20px", labelSize: "9px" });
                break;
            case "medium":
                setSizes({ loaderSize: "40px", labelSize: "15px" });
                break;
            case "large": {
                setSizes({ loaderSize: "80px", labelSize: "23px" });
                break;
            }
        };
    }, [size]);


    const classes = useLoaderStyles({ sizes, loaderColor: colors[color] });
    return (
        <div className={classes.loaderContainer}>
            <div className={classes.loader}>
            </div>
            {label && <span
                className={classes.loaderLabel}
                style={{ fontSize: sizes.labelSize }}
            >{label}</span>}
        </div>)
};

Loader.defaultProps = {
    color: "primary",
    size: "40px"
};

Loader.propTypes = {
    label: PropTypes.string.isRequired
};

export default Loader;