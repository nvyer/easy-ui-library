import React from "react";
import useStyles from "./styles";
export const Table = ({
  children,
  size,
  onClick,
  ...props
}) => {
  const classes = useStyles(props);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: classes.table
  }, /*#__PURE__*/React.createElement(Size.Provider, {
    value: size
  }, children));
};
export const Size = /*#__PURE__*/React.createContext(Table);