import React from "react";
import { useLinkStyles } from "./styles";
export const Link = ({
  color,
  onClick,
  to,
  children
}) => {
  const classes = useLinkStyles(color);
  return /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    className: classes.link,
    href: to
  }, children);
};
Link.defaultProps = {
  color: "primary"
};