import React from "react";
import useStyles from "./styles";
export const TableContainer = ({
  children,
  ...props
}) => {
  const classes = useStyles(props);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.tableContainer
  }, children);
};