import React, { useContext } from "react";
import { Size } from "./table";
import useStyles from "./styles";
export const TableHead = ({
  children,
  onClick,
  ...props
}) => {
  const Tablesize = useContext(Size);
  props = { ...props,
    Tablesize
  };
  const classes = useStyles(props);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: classes.tableHead
  }, children);
};