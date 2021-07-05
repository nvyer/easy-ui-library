import "./tooltip.css";
export const Tooltip = ({
  children,
  tooltipStyle,
  position,
  content
}) => {
  if (!tooltipStyle) {
    tooltipStyle = "tooltip--primary";
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: `${tooltipStyle} ${position}`,
    content: content
  }, children));
};