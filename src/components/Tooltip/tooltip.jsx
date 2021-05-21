import "./tooltip.css";

export const Tooltip = ({ children, tooltipStyle, position, content }) => {
  return (
    <div>
      <div className={`${tooltipStyle} ${position}`} content={content}>
        {children}
      </div>
    </div>
  );
};
