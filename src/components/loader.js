import React, { useEffect, useState } from "react";
import { useLoaderStyles } from "./styles";

const Loader = ({ color, size }) => {
    const [loaderSize, setLoaderSize] = useState("40px");
    const [loaderColor, setLoaderColor] = useState(color ? color : "#1DD4CE");

    useEffect(() => {
        switch (size) {
            case "small":
                setLoaderSize("20px");
                break;
            case "medium":
                setLoaderSize("40px");
                break;
            case "large": {
                setLoaderSize("80px");
                break;
            }
        }
    }, [loaderSize]);

    const classes = useLoaderStyles({ loaderColor, loaderSize });
    return <div className={classes.loader}></div>
};

export default Loader