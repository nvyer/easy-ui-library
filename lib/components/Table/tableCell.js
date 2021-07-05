import React from "react";
import useStyles from "./styles";
export const TableCell = ({
  children,
  onClick,
  ...props
}) => {
  const classes = useStyles(props);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: classes.tableCell
  }, children);
};