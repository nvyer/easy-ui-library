import { useStepConectorStyles } from "./styles";


const StepConnector = () => {
    const classes = useStepConectorStyles();
    return (
        <span className={classes.connectorContainer}></span>
    )
};

export default StepConnector;

