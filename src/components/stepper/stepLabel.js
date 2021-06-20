import { useStepLabelStyles } from "./styles";

const StepLabel = ({ error, children }) => {
    const classes = useStepLabelStyles();
    return (
        <span
            classes={classes.labelContainer}>
            <span className={classes.label}>
                {children}
            </span>
        </span>
    )
};


export default StepLabel;
