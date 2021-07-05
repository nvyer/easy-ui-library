import React, { useContext } from "react";
import { Size } from './table';
import useStyles from "./styles";
export const TableBody = ({
  children,
  onClick,
  ...props
}) => {
  const tablesSize = useContext(Size);
  props = { ...props,
    tablesSize
  };
  const classes = useStyles(props);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: classes.tableBody
  }, children);
};